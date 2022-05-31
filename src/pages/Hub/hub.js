import React, { useState, useEffect } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    Input,
    Divider,
    Link,
    Select,
    MenuItem,
    useMediaQuery,
    Container,
    Avatar,
    Chip
} from '@mui/material';

import { useWeb3React } from "@web3-react/core";
import { styled } from '@mui/material/styles';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { CrossPool, CrossPoolColor } from "../../assets/constants/wallets";
import CrossPools from "./cross.pools";
import { bridge_data } from "../../config/abis/bridge/bscBridge"
import { getBalance } from "../../config/app";
import { TokenABI } from "../../config/abis/TokenABI";
import Cwallet from "../../assets/constants/Cwallet";
import Web3 from 'web3';

const HubPaper = styled(Paper)(() => ({
    margin: "20px 0",
    background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.14) 100%);",
    overflow: "hidden",
    borderRadius: "14px"
}));
const HubButton = styled(Button)(() => ({
    borderRadius: "12px",
    fontSize: "14px",
}));

const SwapButton = styled(Button)(() => ({
    width: "100%",
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    borderRadius: "12px",
    background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)"
}));

export default function hub({ chainState, tabValue, setTabValue }) {
    const matches600 = useMediaQuery('(min-width:600px)');

    const [token1, setToken1] = useState(chainState.bridge_tokens[0]);
    const [token2, setToken2] = useState("select");
    const [crossData, setCrossData] = useState();
    const [pairData, setPairData] = useState();
    const [inputAmount, setInputAmount] = useState();
    const [token1Balance, setToken1Balance] = useState();
    const [swapBtnState, setSwapBtnState] = useState();
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const { active, account } = useWeb3React();
    const web3 = new Web3(window.ethereum);
    const BN = web3.utils.BN;

    useEffect(async () => {
        setToken1(chainState.bridge_tokens[0]);
        setToken2("select");
        let data = [];
        for (let i = 0; i < chainState.bridge_tokens[0]._num.length; i++) {
            for (let k = 0; k < CrossPool[chainState.bridge_tokens[0]._num[i]].token_pair.length; k++) {
                let filter = await data.find((data1) => (data1.address === CrossPool[chainState.bridge_tokens[0]._num[i]].token_pair[k].address));
                if (!filter && chainState.bridge_tokens[0].address !== CrossPool[chainState.bridge_tokens[0]._num[i]].token_pair[k].address) {
                    data.push(CrossPool[chainState.bridge_tokens[0]._num[i]].token_pair[k]);
                }
            }
        }
        setPairData(data);
    }, [chainState]);

    useEffect(async () => {
        if (token2 === "select") {
            setSwapBtnState(0);
            return;
        }

        if (!inputAmount || inputAmount === '' || Number(inputAmount) <= 0) {
            setSwapBtnState(1);
            return;
        }
        let eth_balance = await web3.eth.getBalance(account);
        if (eth_balance === '0') {
            setSwapBtnState(2);
            return;
        }
        let token1Inst = new web3.eth.Contract(TokenABI, token1.address);
        let balance = await token1Inst.methods.balanceOf(account).call();
        let balance_v2 = await getBalance(balance, token1.decimals);
        if (!balance_v2 || balance_v2 < inputAmount) {
            setSwapBtnState(3);
            return;
        }
        let allowance = await token1Inst.methods.allowance(account, bridge_data.address).call();
        let allowance_v2 = await getBalance(allowance, token1.decimals);
        if (allowance_v2 && allowance_v2 >= inputAmount) {
            setSwapBtnState(5);
        } else {
            setSwapBtnState(4);
        }
    }, [token1, token2, inputAmount]);

    useEffect(async () => {
        let token1Inst = new web3.eth.Contract(TokenABI, token1.address);
        let balance1_v1 = await token1Inst.methods.balanceOf(account).call();
        let balance1_v2 = await getBalance(balance1_v1, token1.decimals);
        setToken1Balance(balance1_v2);
    }, [token1, account]);

    useEffect(() => {
        setTabValue(tabValue);
    }, [tabValue])

    const [crossPools, setCrossPools] = useState([{
        tvl: 21.59,
        vol: 407.04,
        apy: 3.68,
        rewards: 407.04,
        pool: "ETH",
    }]);

    const hubPageChange = (newValue, data) => {
        setCrossData(data);
        setTabValue(newValue);
    }

    const TokenChange1 = async (event) => {
        setToken1(event.target.value);
        let data = [];
        for (let i = 0; i < event.target.value._num.length; i++) {
            for (let k = 0; k < CrossPool[event.target.value._num[i]].token_pair.length; k++) {
                let filter = await data.find((data1) => (data1.address === CrossPool[event.target.value._num[i]].token_pair[k].address));
                if (!filter && event.target.value.address !== CrossPool[event.target.value._num[i]].token_pair[k].address) {
                    data.push(CrossPool[event.target.value._num[i]].token_pair[k]);
                }
            }
        }
        setToken2("select");
        setPairData(data);
    };
    const TokenChange2 = (event) => {
        setToken2(event.target.value);
    };

    const outputData = (e) => {
        setInputAmount(e.target.value);
    }

    const tokenApprove = async () => {
        let tokenInst = new web3.eth.Contract(TokenABI, token1.address);
        let approve_amount = (new BN(inputAmount).mul(new BN(10).pow(new BN(token1.decimals)))).toString();
        setSwapBtnState(6);
        await tokenInst.methods.approve(bridge_data.address, approve_amount).send({
            from: account
        }, function (error) {
            if (error) {
                setSwapBtnState(4);
            }
        });
        setSwapBtnState(5);
    }

    const tokenSwap = async () => {
        try {
            let bridgeInst = new web3.eth.Contract(bridge_data.abi, bridge_data.address);
            let swap_amount = (new BN(inputAmount).mul(new BN(10).pow(new BN(token1.decimals)))).toString();
            setSwapBtnState(6);
            let deadline = new Date().valueOf() + 100000000;
            let feeAmount = new BN(10).pow(new BN(15)).mul(new BN(2));
            const params = [
                token1.address,
                1,
                7,
                "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
                account,
                swap_amount,
                0,
                feeAmount,
                1
            ]
            // const gasAmount = await bridgeInst.methods.swap( ...params ).estimateGas({ from: account, value: web3.utils.toWei(feeAmount, 'wei') }); //.then(function (gasAmount) {

            // console.log(gasAmount);
            await bridgeInst.methods.swap(
                token1.address,
                1,
                7,
                "0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047",
                account,
                swap_amount,
                0,
                0,
                1
            ).send({
                from: account,
                value: (0).toString(16)
            }, function (error) {
                if (error) {
                    setSwapBtnState(5);
                }
            });
            setSwapBtnState(4);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
            {tabValue === 2 ?
                <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)", p: "42px 0 145px" }}>
                    <Container maxWidth="lg">
                        <Paper sx={{ background: "#191919", borderRadius: "14px", maxWidth: "100%", p: "48px 4.72%", m: "38px 0" }}>
                            <Paper sx={{ background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.14) 100%)", maxWidth: "100%", borderRadius: "14px", p: "26px 2.2%" }}>
                                <Grid container justifyContent="space-between">
                                    <Grid xs={12} sm={5}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>You pay</Typography>
                                                {token1 && <Chip size='small' className="group-mark" label={CrossPoolColor[token1.chainId].group_name} sx={{ background: `${CrossPoolColor[token1.chainId].text}` }} />}
                                            </Stack>
                                            <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>Balance: {token1Balance ? token1Balance : 0}&nbsp;{token1.symbol}&nbsp;<Link underline='none' sx={{ color: "#34F14B !important" }} onClick={() => setInputAmount(token1Balance)}>Max</Link></Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ padding: "10px 0" }}>
                                            <Select
                                                id="demo-simple-select-helper"
                                                value={token1}
                                                onChange={TokenChange1}
                                                sx={{ height: "55px" }}
                                            >
                                                {chainState.bridge_tokens.map((data, index) => (
                                                    <MenuItem value={data} key={index}>
                                                        <Stack direction="row" alignItems="center" spacing={2} sx={{ padding: "4px" }}>
                                                            {data.logoURI !== null ?
                                                                <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                                :
                                                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                            }
                                                            <Typography>{data.symbol}</Typography>
                                                        </Stack>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <Input className='swap_input' color="primary" placeholder='0.0' type='number' variant="standard" value={inputAmount} onChange={outputData} sx={{ color: "white", fontSize: "24px" }} />
                                        </Stack>
                                        <Typography align='right' sx={{ fontSize: "16px", color: "#7E8B74" }}>=$ --&nbsp;</Typography>
                                    </Grid>
                                    {matches600 ?
                                        <Divider orientation="vertical" flexItem>
                                            <Button variant='contained' color="secondary" sx={{ color: "white", minWidth: "0 !important", p: "6px 7px" }}><SwapHorizIcon /></Button>
                                        </Divider>
                                        :
                                        <Grid xs={12} sm={1}>
                                            <Divider orientation="horizontal">
                                                <Button variant='contained' color="secondary" sx={{ color: "white", minWidth: "0 !important", p: "6px 7px" }}><SwapVertIcon /></Button>
                                            </Divider>
                                        </Grid>
                                    }
                                    <Grid xs={12} sm={5}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>You will receive </Typography>
                                            {token2 !== "select" && <Chip size='small' className="group-mark" label={CrossPoolColor[token2.chainId].group_name} sx={{ background: `${CrossPoolColor[token2.chainId].text}` }} />}
                                        </Stack>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ padding: "10px 0" }}>
                                            <Select
                                                id="demo-simple-select-helper"
                                                value={token2}
                                                onChange={TokenChange2}
                                                sx={{ height: "55px" }}
                                            >
                                                <MenuItem value="select">Select</MenuItem>
                                                {pairData && pairData.map((data, index) => (
                                                    <MenuItem value={data} key={index}>
                                                        <Stack direction="row" alignItems="center" spacing={2} sx={{ padding: "4px" }}>
                                                            {data.logoURI !== null ?
                                                                <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                                :
                                                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                            }
                                                            <Typography>{data.symbol}</Typography>
                                                            {token2 !== data &&
                                                                <Chip size='small' className="group-mark" label={CrossPoolColor[data.chainId].group_name} sx={{ background: `${CrossPoolColor[data.chainId].text}` }} />
                                                            }
                                                        </Stack>
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                            <Input className='swap_input' color="primary" type='number' variant="standard" sx={{ color: "white", fontSize: "24px" }} placeholder='0.0' readOnly></Input>
                                        </Stack>
                                        <Typography align='right' sx={{ fontSize: "16px", color: "#7E8B74" }}>=$ --&nbsp;</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Grid container sx={{ padding: "35px 0" }}>
                                <Grid md={4} sm={7} xs={12} direction="column" sx={{ color: "#7E8B74" }}>
                                    <Typography variant='p'>Exchange Rate ETH/ETH(including fees):</Typography>
                                    <Stack direction="row">
                                        <Typography variant='p'>Poly Fee: </Typography>
                                        <Typography variant='p' sx={{ color: "#34F14B" }}>0.00000242 ETH</Typography>
                                    </Stack>
                                    <Stack direction="row">
                                        <Typography variant='p'>Max slippage: </Typography>
                                        <Typography variant='p' sx={{ color: "#34F14B" }}>1%</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography>From:</Typography>
                                            {active && <Avatar src={chainState.logo1} sx={{ width: "20px", height: "20px" }} />}
                                            <Typography sx={{ color: "#34F14B" }}>{active && `${account.slice(0, 8)}...${account.slice(-8)}`}</Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Typography>To:</Typography>
                                            {active && token2 !== "select" && <Avatar src={CrossPoolColor[token2.chainId].logo} sx={{ width: "20px", height: "20px" }} />}
                                            <Typography sx={{ color: "#34F14B" }}>{active && token2 !== "select" && `${account.slice(0, 8)}...${account.slice(-8)}`}</Typography>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                {
                                    active ?
                                        <Box sx={{ maxWidth: "350px", width: "100%" }}>
                                            {swapBtnState === 0 && <SwapButton disabled={true} sx={{ background: "#37474f" }}>No select output token</SwapButton>}
                                            {swapBtnState === 1 && <SwapButton disabled={true} sx={{ background: "#37474f" }}><Typography sx={{ color: "#78909c", py: "3px", fontWeight: "600" }}>Enter amount to swap</Typography></SwapButton>}
                                            {swapBtnState === 2 && <SwapButton disabled={true} sx={{ background: "#37474f" }}><Typography sx={{ color: "#78909c", py: "3px", fontWeight: "600" }}>Insufficient balance to pay for gas</Typography></SwapButton>}
                                            {swapBtnState === 3 && <SwapButton disabled={true} sx={{ background: "#37474f" }}><Typography sx={{ color: "#78909c", py: "3px", fontWeight: "600" }}>Insufficient {token1.symbol} balance</Typography></SwapButton>}
                                            {swapBtnState === 4 && <SwapButton onClick={tokenApprove}>Give permission to use {token1.symbol}</SwapButton>}
                                            {swapBtnState === 5 && <SwapButton onClick={tokenSwap}>swap</SwapButton>}
                                            {swapBtnState === 6 && <SwapButton disabled={true}>Loading...</SwapButton>}
                                        </Box>
                                        :
                                        <Box sx={{ maxWidth: "350px", width: "100%" }}>
                                            <SwapButton onClick={() => setIsOpenDialog(true)}>Connect Wallet</SwapButton>
                                        </Box>
                                }
                            </Grid>
                        </Paper>
                        <Box sx={{ borderRadius: "14px", p: "4.34%" }}>
                            <Typography variant='h5' sx={{ color: "white", marginBottom: "30px" }}>Cross-chain&nbsp;Pool</Typography>
                            {
                                CrossPool.map((data, index) => (
                                    <HubPaper key={index} elevation={12} sx={{ overflow: "auto" }}>
                                        <Grid container direction="row" sx={{ minWidth: "700px" }}>
                                            <Grid container xs={10} sx={{ p: "2%" }}>
                                                <Grid xs={3}>
                                                    <Typography gutterBottom sx={{ color: "white" }}>${crossPools[0].tvl}M</Typography>
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>TVL</Typography>
                                                </Grid>
                                                <Grid xs={3}>
                                                    <Typography gutterBottom sx={{ color: "white" }}>${crossPools[0].vol}</Typography>
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>VOL</Typography>
                                                </Grid>
                                                <Grid xs={3}>
                                                    <Typography gutterBottom sx={{ color: "white" }}>{crossPools[0].apy}%</Typography>
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>APY</Typography>
                                                </Grid>
                                                <Grid xs={3}>
                                                    <Typography align='right' gutterBottom sx={{ color: "white" }}>${crossPools[0].rewards}</Typography>
                                                    <Typography align='right' sx={{ color: "#7E8B74", fontSize: "14px" }}>REWARDS</Typography>
                                                </Grid>
                                                <Grid xs={12}>
                                                    <Divider variant="inset" sx={{ margin: "20px 0", borderColor: "#353535" }} />
                                                </Grid>
                                                <Grid xs={12} sx={{ color: "#7E8B74" }}>
                                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                        <Stack direction="row" alignItems='center'>
                                                            <Avatar sx={{ width: "26px", height: "26px" }} src={data.logo2} />
                                                            <Typography sx={{ color: "#34F14B", fontSize: "14px" }}>&nbsp;{data.name}:&nbsp;</Typography>
                                                            <Typography sx={{ fontSize: "14px" }}>{data.token_pair.map((data1, index1) => {
                                                                if (index1 + 1 === data.token_pair.length) {
                                                                    return (`${data1.symbol} (${data1.group_name}) + `).slice(0, -2);
                                                                } else {
                                                                    return `${data1.symbol} (${data1.group_name}) + `;
                                                                }
                                                            })}</Typography>
                                                        </Stack>
                                                        <Stack direction="row" spacing={0.5}>
                                                            <HubButton size="small" sx={{ background: "rgba(52, 241, 75, 0.06)", margin: "0 10px", color: "#34F14B" }} onClick={() => hubPageChange(0, data)}>Deposit</HubButton>
                                                            <HubButton size="small" sx={{ background: "rgba(40, 73, 175, 0.21)", color: "#4C6DD1" }} onClick={() => hubPageChange(1, data)}>Withdraw</HubButton>
                                                        </Stack>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2} justifyContent="flex-end" alignItems="flex-end">
                                                <Typography component="img" src={data.logo1} sx={{ maxWidth: "100%" }}></Typography>
                                            </Grid>
                                        </Grid>
                                    </HubPaper>
                                ))
                            }
                        </Box>
                        <Paper sx={{ background: "#232121", borderRadius: "14px", p: "2.48%" }}>
                            <Grid container direction='column'>
                                <Typography sx={{ color: "white", p: "0 0 18px" }}>Total Pool Deposits & Daily Volume</Typography>
                                <Typography gutterBottom variant='p' sx={{ color: "#7E8B74" }}>Total&nbsp;pool&nbsp;deposit: $ 75,790,000,000</Typography>
                                <Typography variant='p' sx={{ color: "#7E8B74" }}>Daily volume: $&nbsp;2,260,000,000</Typography>
                            </Grid>
                        </Paper>
                    </Container>
                </Box>
                :
                <CrossPools tabValue={tabValue} setTabValue={setTabValue} crossData={crossData} />
            }
            <Cwallet isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} chain={chainState} />
        </Box>
    )
}