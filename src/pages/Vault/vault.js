import React, { useState, useEffect, useRef } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    IconButton,
    Divider,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    DialogContent,
    Avatar,
    Input,
} from '@mui/material';

import { getBalance } from "../../config/app";
import { TokenABI } from "../../config/abis/TokenABI";
import { StakingToken } from "../../assets/constants/wallets"
import { BootstrapDialog, BootstrapDialogTitle } from "../../config/style";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CalculateIcon from '@mui/icons-material/Calculate';
import CloseIcon from "@mui/icons-material/Close";

// import lps from '../../assets/img/common/lp-eth-bsc 1.png';
const web3 = new Web3(window.ethereum);
const BN = web3.utils.BN;

const VaultButton = styled(Button)(() => ({
    borderRadius: "12px"
}));
const VaultPaper = styled(Paper)(() => ({
    borderRadius: "24px",
    background: "#232121"
}));

export default function vault({ chain }) {
    const [vaults, setVaults] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [unlockState, setUnlockState] = useState(0);
    const [maxLPAmount, setMaxLPAmount] = useState(0);
    const [stakeDialogState, setStakeDialogState] = useState({ state: false, work: "" });
    const [LPAmount, setLPAmount] = useState();
    const [staking, setStaking] = useState(StakingToken[0]);
    const [stakeState, setStakeState] = useState(1);
    const [stakedAmount, setStakedAmount] = useState(0);
    const {
        activate,
        active,
        account,
        chainId,
        deactivate,
        connector,
        error,
        setError,
    } = useWeb3React();

    useEffect(async () => {
        let selectStaking = StakingToken.find((data) => (data.test_chainId === chainId));
        if (selectStaking) {
            setStaking(selectStaking);
            let LPInst = new web3.eth.Contract(TokenABI, selectStaking.test_LP_token);
            let StakingInst = new web3.eth.Contract(selectStaking.stakingABI, selectStaking.test_stakingContract);
            let lp_balance = await LPInst.methods.balanceOf(account).call();
            let decimals = await LPInst.methods.decimals().call();
            let staked_amount = await StakingInst.methods.getStakingAmount(account).call();
            let staked_amount_v2 = await getBalance(staked_amount, decimals);
            if (staked_amount_v2) {
                setStakedAmount(staked_amount_v2);
            }
            setMaxLPAmount(getBalance(lp_balance, decimals));
        }
    }, [chainId]);

    const stakeDialogClose = () => {
        setStakeDialogState(false);
    }

    const moreInfo = () => {
        console.info('You clicked the Chip.');
    }

    const stakeConfirm = async () => {
        const eth_balance = await web3.eth.getBalance(account);
        if (!eth_balance) {
            alert('Insufficient balance to pay for gas');
            return false;
        }
        if (!active) {
            alert("Please Connect Wallet");
            return false;
        }
        if (!LPAmount) {
            alert("Wrong Input");
            return false;
        }

        if (stakeDialogState.work === "Stake") {
            if (maxLPAmount < LPAmount) {
                alert("Insufficient balance");
                return false
            }
            setStakeState(2);
        } else {
            if (stakedAmount < LPAmount) {
                alert("Insufficient balance");
                return false
            }
            tokenStaking();
        }
    }

    const tokenApprove = async () => {
        let LPInst = new web3.eth.Contract(TokenABI, staking.test_LP_token);
        let decimals = await LPInst.methods.decimals().call();
        let input_amount = LPAmount * (10 ** 5);
        let lp_amount = (new BN(input_amount).mul(new BN(10).pow(new BN(decimals).sub(new BN(5))))).toString();
        setStakeState(4);
        await LPInst.methods.approve(staking.test_stakingContract, lp_amount).send({
            from: account
        }, function (error) {
            if (error) {
                setStakeState(2);
            }
        });
        setStakeState(3);
    }

    const tokenStaking = async () => {
        let LPInst = new web3.eth.Contract(TokenABI, staking.test_LP_token);
        let decimals = await LPInst.methods.decimals().call();
        console.log(decimals);
        let StakingInst = new web3.eth.Contract(staking.stakingABI, staking.test_stakingContract);
        let input_amount = LPAmount * (10 ** 5);
        let amount = (new BN(input_amount).mul(new BN(10).pow(new BN(decimals).sub(new BN(5))))).toString();
        setStakeState(4);
        if (stakeDialogState.work === "Stake") {
            await StakingInst.methods.stake(amount).send({
                from: account
            }, function (error) {
                if (error) {
                    setStakeState(3);
                }
            });
        } else {
            await StakingInst.methods.unstake(amount).send({
                from: account
            }, function (error) {
                if (error) {
                    setStakeState(1);
                }
            });
        }
        // let LPInst = new web3.eth.Contract(TokenABI, staking.test_LP_token);
        let lp_balance = await LPInst.methods.balanceOf(account).call();
        setMaxLPAmount(getBalance(lp_balance, decimals));
        let staked_amount = await StakingInst.methods.getStakingAmount(account).call();
        let staked_amount_v2 = await getBalance(staked_amount, decimals);
        setStakedAmount(staked_amount_v2);
        setStakeState(1);
        stakeDialogClose();
    }

    return (
        <Box>
            <Grid sx={{ my: "26px" }}>
                <VaultPaper sx={{ padding: "28px 3.4%" }}>
                    <Box sx={{ overflow: "auto" }}>
                        <Box sx={{ minWidth: "800px" }}>
                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                <Typography sx={{ fontSize: "24px" }}>Unlock LambSwap</Typography>
                                <Chip onClick={moreInfo} label="How to unlock ?"></Chip>
                            </Stack>
                            <Grid container sx={{ fontSize: "18px", padding: "20px 0 10px" }}>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Name</Typography>
                                    <Stack direction="row" alignItems="center">
                                        <Avatar src={staking.token1_logo} sx={{ width: "30px", height: "30px", zIndex: "10" }} />
                                        <Avatar src={staking.token2_logo} sx={{ width: "30px", height: "30px", ml: "-12px" }} />&nbsp;&nbsp;
                                        <Typography>LambSwap-LP</Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Staked</Typography>
                                    <Typography>{stakedAmount}</Typography>
                                </Grid>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Speed</Typography>
                                    <Typography>--</Typography>
                                </Grid>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Unlock Amount</Typography>
                                    <Typography>--</Typography>
                                </Grid>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Remaining</Typography>
                                    <Typography>{maxLPAmount}</Typography>
                                </Grid>
                                <Grid xs={1.5} direction="column">
                                    <IconButton sx={{ margin: "11px 0" }} onClick={() => setUnlockState(unlockState === 0 ? 1 : 0)}>{unlockState === 0 ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
                                    <Typography></Typography>
                                </Grid>
                            </Grid>
                            {unlockState === 0 ?
                                <Divider sx={{ margin: "22px 0" }} />
                                :
                                <Grid container sx={{ mt: "9px" }}>
                                    <Grid lg={3} xs={6}>
                                        <VaultButton sx={{ background: "rgba(52, 241, 75, 0.06)", mr: "10px", width: "115px" }}>claim</VaultButton>
                                        <VaultButton variant='outlined' onClick={() => window.open(`${chain.chainId === 56 ? `https://pancakeswap.finance/add/0x4fd8cC4CAF509A60dACdb34fa0b290d18d101391/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56` : `https://quickswap.exchange/#/add/0xEe9801669C6138E84bD50dEB500827b776777d28/0x2791bca1f2de4661ed88a30c99a7a9449aa84174`}`, '_blank', 'noopener')} sx={{ width: "115px" }}>get lp</VaultButton>
                                    </Grid>
                                    <Grid lg={3} xs={6}>
                                        <VaultButton variant='outlined' color="inherit" sx={{ mr: "10px", width: "115px" }} onClick={() => setStakeDialogState({ state: true, work: "Stake" })}>stake</VaultButton>
                                        <VaultButton variant='outlined' color="inherit" sx={{ width: "115px" }} onClick={() => setStakeDialogState({ state: true, work: "Unstake" })}>unstake</VaultButton>
                                    </Grid>
                                </Grid>
                            }
                        </Box>
                    </Box>
                </VaultPaper>
            </Grid>
            <TableContainer component={Paper} sx={{ background: "transparent" }}>
                <Table aria-label="simple table">
                    <TableBody>
                        {vaults.map((data, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ p: "24px 0" }}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Typography component="img" src={staking.token1_logo} sx={{ width: "46px", height: "46px" }} />
                                        <Stack direction="column">
                                            <Typography sx={{ fontSize: "14px" }}>LAMBSWAP</Typography>
                                            <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>Automatic&nbsp;restaking</Typography>
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ p: "24px 15px" }}>
                                    <Stack direction="column">
                                        <Typography>APY</Typography>
                                        <Stack direction="row" sx={{ color: "#7E8B74" }}>
                                            <Typography>780.00%</Typography>
                                            <CalculateIcon />
                                        </Stack>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ p: "24px 15px" }}>
                                    <Stack direction="column">
                                        <Typography>LST&nbsp;Staked</Typography>
                                        <Typography>$314,472,864</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ p: "24px 15px" }}>
                                    <Stack direction="column">
                                        <Typography>Total Staked</Typography>
                                        <Typography>70,000,000,000&nbsp;LST</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell sx={{ p: "24px 0" }} align="right">
                                    <Button endIcon={<ExpandMoreIcon />} sx={{ color: "#7E8B74" }}>Detail</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Grid container sx={{ padding: "14px 0" }}>
                <Grid xs={12} lg={6.5} sx={{ paddingRight: "8px" }}>
                    <Stack direction="row" spacing={1} sx={{ padding: "24px 0" }}>
                        <Typography sx={{ fontSize: "18px" }}>Stake LP To Earn LambSwap</Typography>
                        <Chip onClick={moreInfo} label="More  info ?"></Chip>
                    </Stack>
                    <VaultPaper sx={{ padding: "20px 28px" }}>
                        <Stack direction="row" justifyContent="space-between">
                            <Stack direction="row" alignItems="center">
                                <Typography component="img" src={lps} />&nbsp;&nbsp;<Typography>LambSwap</Typography>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <VaultButton variant='outlined' color="inherit" sx={{ width: "115px" }}>stake</VaultButton>
                                <VaultButton variant='outlined' color="inherit" sx={{ width: "115px" }}>unstake</VaultButton>
                            </Stack>
                        </Stack>
                        <Grid container sx={{ padding: "28px 10px" }}>
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>- -</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Staked</Typography>
                            </Grid>
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>- -</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Remaining</Typography>
                            </Grid>
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>- -</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Total Staking</Typography>
                            </Grid>
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>- - %</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>APR %</Typography>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Stack direction="row" justifyContent="space-between" sx={{ padding: "28px 0 12px" }}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography>Claimable LambSwap:  --</Typography>
                                <VaultButton sx={{ background: "rgba(52, 241, 75, 0.06)" }}>claim</VaultButton>
                            </Stack>
                            <VaultButton variant='outlined'>get lp</VaultButton>
                        </Stack>
                    </VaultPaper>
                </Grid>
                <Grid xs={12} lg={5.5}>
                    <Stack direction="row" sx={{ padding: "24px 0" }} spacing={1}>
                        <Typography sx={{ fontSize: "18px" }}>Stake LP To Earn LambSwap</Typography>
                        <Chip onClick={moreInfo} label="More info ?"></Chip>
                    </Stack>
                    <VaultPaper sx={{ padding: "20px 28px" }}>
                        <Stack direction="row" spacing={1}>
                            <Stack alignItems="flex-start"><Typography component="img" src={lps} /></Stack>
                            <Stack direction="column">
                                <Typography>LambSwap</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Claimable LambSwap:  --</Typography>
                            </Stack>
                            <Stack><VaultButton sx={{ background: "rgba(52, 241, 75, 0.06)", marginBottom: "-40px" }}>claim</VaultButton></Stack>
                        </Stack>
                        <Grid container sx={{ padding: "28px 10px" }}>
                            <Grid container lg={3} direction="column" alignItems="center">
                                <Typography gutterBottom>- -</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Staked</Typography>
                            </Grid>
                            <Divider sx={{ margin: "0 25px" }} orientation="vertical" flexItem />
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>351,247.02</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>Total Staking</Typography>
                            </Grid>
                            <Divider sx={{ margin: "0 25px" }} orientation="vertical" flexItem />
                            <Grid lg={3} direction="column">
                                <Typography gutterBottom>0 %</Typography>
                                <Typography sx={{ color: "#7e8b74" }}>APR %</Typography>
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="space-around" sx={{ padding: "16px 0 12px" }}>
                            <VaultButton variant='outlined' sx={{ width: "115px" }}>stake</VaultButton>
                            <VaultButton variant='outlined' color="secondary" sx={{ width: "115px" }}>unstake</VaultButton>
                        </Stack>
                    </VaultPaper>
                </Grid>
            </Grid>
            <Grid>
                <Stack direction="row" sx={{ padding: "24px 0" }} spacing={1}>
                    <Typography sx={{ fontSize: "18px" }}>Stake LP To Earn LambSwap</Typography>
                    <Chip onClick={moreInfo} label="More info ?"></Chip>
                </Stack>
                <Grid container>
                    {[...new Array(6)].map((data, index) => (
                        <Grid xs={12} lg={4} key={index} sx={{ padding: "4px" }}>
                            <VaultPaper sx={{ padding: "20px 28px" }}>
                                <Stack direction="row" spacing={1}>
                                    <Stack alignItems="flex-start"><Typography component="img" src={lps} /></Stack>
                                    <Stack direction="column">
                                        <Typography>LambSwap</Typography>
                                        <Typography sx={{ color: "#7e8b74" }}>Claimable LambSwap:  --</Typography>
                                    </Stack>
                                    <Stack><VaultButton sx={{ background: "rgba(52, 241, 75, 0.06)", marginBottom: "-40px" }}>claim</VaultButton></Stack>
                                </Stack>
                                <Grid container sx={{ padding: "28px 0px" }}>
                                    <Grid container lg={3} direction="column" alignItems="center">
                                        <Typography gutterBottom>- -</Typography>
                                        <Typography sx={{ color: "#7e8b74" }}>Staked</Typography>
                                    </Grid>
                                    <Divider sx={{ margin: "0 15px" }} orientation="vertical" flexItem />
                                    <Grid lg={3} direction="column">
                                        <Typography gutterBottom>351,247.02</Typography>
                                        <Typography sx={{ color: "#7e8b74" }}>Total Staking</Typography>
                                    </Grid>
                                    <Divider sx={{ margin: "0 15px" }} orientation="vertical" flexItem />
                                    <Grid lg={3} direction="column">
                                        <Typography gutterBottom>0 %</Typography>
                                        <Typography sx={{ color: "#7e8b74" }}>APR %</Typography>
                                    </Grid>
                                </Grid>
                                <VaultButton variant='outlined' color="secondary" sx={{ margin: "16px 0 12px", width: "100%" }}>unstake</VaultButton>
                            </VaultPaper>
                        </Grid>
                    ))}
                </Grid>
            </Grid> */}
            <BootstrapDialog
                onClose={stakeDialogClose}
                open={stakeDialogState.state}
                className="stake-dialog"
            >
                <BootstrapDialogTitle sx={{ p: "20px 20px 0px 30px" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "5px" }}>
                        <Typography sx={{ fontSize: "20px" }}>{stakeDialogState.work}</Typography>
                        <IconButton onClick={stakeDialogClose}><CloseIcon /></IconButton>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent sx={{ m: "15px" }}>
                    <Paper className="stake-paper">
                        <Typography sx={{ color: "#7E8B74", mb: "15px" }}>Amount</Typography>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                            <Stack direction="row" alignItems="center">
                                <Avatar src={staking.token1_logo} sx={{ width: "30px", height: "30px", zIndex: "10" }} />
                                <Avatar src={staking.token2_logo} sx={{ width: "30px", height: "30px", ml: "-12px" }} />&nbsp;&nbsp;
                                <Typography>LambSwap-LP</Typography>
                            </Stack>
                            <Input className='swap_input' color="primary" placeholder='0.0' type='number' variant="standard" value={LPAmount} sx={{ color: "white", fontSize: "20px", maxWidth: "170px" }} onChange={(e) => setLPAmount(e.target.value)} />
                        </Stack>
                    </Paper>
                    <Typography sx={{ color: "#7E8B74", my: "15px" }}>Balance: {stakeDialogState.work === "Stake" ? maxLPAmount : stakedAmount} LAMBSWAP-LP&nbsp;&nbsp;<a style={{ color: "#6162ef" }} onClick={() => setLPAmount(stakeDialogState.work === "Stake" ? maxLPAmount : stakedAmount)}>MAX</a></Typography>
                    {stakeState === 1 && <Button className="confirm-button" onClick={stakeConfirm}>Confirm</Button>}
                    {stakeState === 2 && <Button className="confirm-button" onClick={tokenApprove}>approve</Button>}
                    {stakeState === 3 && <Button className="confirm-button" onClick={tokenStaking}>staking</Button>}
                    {stakeState === 4 && <Button className="disable-button" disabled={true}>Loading...</Button>}
                </DialogContent>
            </BootstrapDialog>
        </Box>
    );
}