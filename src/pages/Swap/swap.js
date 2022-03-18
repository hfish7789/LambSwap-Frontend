import React, { useEffect, useState, useRef } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Input,
    IconButton,
    Chip,
    Avatar,
    TextField
} from '@mui/material';

import { CustomTab } from '../../config/style';
import { TokenABI } from "../../config/abis/TokenABI";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import Refresh from '../../assets/img/common/refresh.png';
import Filter from '../../assets/img/common/filter.png';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { styled, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useWeb3React } from "@web3-react/core";
import Cwallet from "../../assets/constants/Cwallet";

import './swap.css';
import { LambSwapRouter_ADDRESS, LambSwapRouter_ABI } from "../../config/abis/router/dexRouter";
import { LambSwapFactory_ADDRESS, LambSwapFactory_ABI } from "../../config/abis/router/dexFactory";
import Web3 from 'web3';

const theme = createTheme({
    palette: {
        primary: {
            main: "#34F14B",
        },
        secondary: {
            main: '#191919',
        }
    }
});

const SwapButton = styled(Button)(() => ({
    width: "100%",
    color: "white",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "12px",
    background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)"
}));

let SwapPaper = styled(Paper)(() => ({
    margin: "99px 0 0"
}));
let ActiveGrid = styled(Grid)(() => ({
    display: "none"
}));
let ActiveStack = styled(Stack)(() => ({
    display: "none"
}));

export default function Swap({ chainState, setChainState }) {
    const [swapTabValue, setSwapTabValue] = useState(0);
    const [activeRate, setActiveRate] = useState(12);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [tokenDialogState, setTokenDialogState] = useState(false);
    const [swapSettingDialogState, setSwapSettingDialogState] = useState(false);
    const { active, account } = useWeb3React();
    const [token1, setToken1] = useState(chainState.tokens[0]);
    const [token2, setToken2] = useState(chainState.tokens[1]);
    const [token3, setToken3] = useState('WETH/DAI');
    const [swapSelectState, setSwapSelectState] = useState(false);
    const [swapSelectOrder, setSwapSelectOrder] = useState(['Direct Swap', 'OTC']);
    const [swapSelectData, setSwapSelectData] = useState('Lambswap');
    const [output_amount, setOutput_amount] = useState();
    const input_amount = useRef();
    const [swapBtnState, setSwapBtnState] = useState(false);
    const [approveBtnState, setApproveBtnState] = useState(false);
    const [routerAddress, setRouterAddress] = useState();
    const [factoryAddress, setFactoryAddress] = useState();
    const web3 = new Web3(window.ethereum);
    const BN = web3.utils.BN;

    useEffect(() => {
        setToken1(chainState.tokens[0]);
        setToken2(chainState.tokens[1]);

        let selectRouter = LambSwapRouter_ADDRESS.find(data => (data.chainId === chainState.chainId));
        let selectFactory = LambSwapFactory_ADDRESS.find(data => (data.chainId === chainState.chainId));
        setRouterAddress(selectRouter.address);
        setFactoryAddress(selectFactory.address);
    }, [chainState]);

    useEffect(() => {
        if (input_amount.current.value && input_amount.current.value > 0) {
            setSwapAmount(input_amount.current.value);
        }
    }, [token1, token2])

    let num = 0;
    useEffect(() => {
        if (num > 0) {
            swapTabChange(swapTabValue);
        }
        num++;
    }, [swapTabValue]);

    const swapTabChange = (newValue) => {
        setSwapTabValue(newValue);
        if (newValue === 0) {
            setActiveRate(4);
            SwapPaper = styled(Paper)(() => ({
                position: "absolute",
                animationName: "paperAnimate1",
                animationDuration: "0.5s"
            }));
            ActiveGrid = styled(Grid)(() => ({
                animationName: "pageAnimate1",
                animationDuration: "0.5s"
            }));
            ActiveStack = styled(Stack)(() => ({
                animationName: "pageAnimate1",
                animationDuration: "0.5s"
            }));
            setTimeout(function () {
                ActiveGrid = styled(Grid)(() => ({
                    display: "none"
                }));
                ActiveStack = styled(Stack)(() => ({
                    display: "none"
                }));
                SwapPaper = styled(Paper)(() => ({
                    margin: "99px 0 276px"
                }));
                setActiveRate(12);
            }, 500);
        }
        if (newValue === 1) {
            setActiveRate(11);
            SwapPaper = styled(Paper)(() => ({
                position: "absolute",
                animationName: "paperAnimate2",
                animationDuration: "0.5s"
            }));
            ActiveGrid = styled(Grid)(() => ({
                animationName: "pageAnimate2",
                animationDuration: "0.5s"
            }));
            ActiveStack = styled(Stack)(() => ({
                animationName: "pageAnimate2",
                animationDuration: "0.5s"
            }));
            setTimeout(function () {
                SwapPaper = styled(Paper)(() => ({
                    margin: "80px 0 130px"
                }));
                ActiveGrid = styled(Grid)(() => ({
                    display: ""
                }));
                ActiveStack = styled(Stack)(() => ({
                    display: ""
                }));
                setActiveRate(4.8);
            }, 500)
        }
    };

    const TokenSelect3 = (event) => {
        setToken3(event.target.value);
    };

    const tokenChange = () => {
        let token_var = token1;
        setToken1(token2);
        setToken2(token_var);
    }

    const selectToken = async (data) => {
        if (tokenDialogState === 1) {
            if (data === token2) {
                setToken2(token1);
            }
            setToken1(data);
        } else if (tokenDialogState === 2) {
            if (data === token1) {
                setToken1(token2);
            }
            setToken2(data);
        }
    }

    const swapSettingDialogOpen = () => {
        setSwapSettingDialogState(true);
    }

    const setSwapAmount = async (newValue) => {
        if (!newValue || newValue < 0) {
            setOutput_amount(0);
            return false;
        }
        const token1Inst = new web3.eth.Contract(TokenABI, token1.address);
        const token2Inst = new web3.eth.Contract(TokenABI, token2.address);
        const routerInst = new web3.eth.Contract(LambSwapRouter_ABI, routerAddress);
        const factoryInst = new web3.eth.Contract(LambSwapFactory_ABI, factoryAddress);
        let pair = await factoryInst.methods.getPair(token1.address, token2.address).call();
        if (pair === "0x0000000000000000000000000000000000000000") {
            alert("No Pool Created. Please create Pool.");
            setApproveBtnState(true);
            return false;
        }
        setApproveBtnState(false);
        let balance1 = await token1Inst.methods.balanceOf(pair).call();
        let balance2 = await token2Inst.methods.balanceOf(pair).call();
        let amountOut = await routerInst.methods.getAmountOut(
            newValue * (10 ** 5),
            balance1,
            balance2
        ).call();
        setOutput_amount(amountOut / (10 ** 5));
    }

    const tokenApprove = async () => {
        if (!input_amount.current.value) {
            alert("Please Enter Amount of Token.");
            return false;
        }

        const eth_balance = await web3.eth.getBalance(account);
        if (!eth_balance) {
            alert('Insufficient balance to pay for gas');
            return false;
        }

        const tokenInst = new web3.eth.Contract(TokenABI, token1.address);
        const decimals = await tokenInst.methods.decimals().call();
        const approve_amount = (new BN(input_amount.current.value).mul(new BN(10).pow(new BN(decimals)))).toString();
        setApproveBtnState(true);
        await tokenInst.methods.approve(routerAddress, approve_amount).send({
            from: account
        });
        setApproveBtnState(false);
        setSwapBtnState(true);
    }

    const tokenSwap = async () => {
        if (!input_amount.current.value) {
            alert("Please Enter Amount of Token to Swap.");
            return false;
        }

        const eth_balance = await web3.eth.getBalance(account)
        if (!eth_balance) {
            alert('Insufficient balance to pay for gas');
            return false;
        }

        let swapPath = [token1.address, token2.address];
        const tokenInst = new web3.eth.Contract(TokenABI, token1.address);
        const decimals = await tokenInst.methods.decimals().call();
        const swap_amount = (new BN(input_amount.current.value).mul(new BN(10).pow(new BN(decimals)))).toString();
        const balance = await tokenInst.methods.balanceOf(account).call();
        if (balance < input_amount.current.value * Math.pow(10, decimals)) {
            alert('Insufficient balance to pay for token');
            return false;
        }

        let deadline = new Date().valueOf() + 10000000;
        setApproveBtnState(true);
        const routerInst = new web3.eth.Contract(LambSwapRouter_ABI, routerAddress);
        await routerInst.methods.swapExactTokensForTokens(
            swap_amount,
            0,
            swapPath,
            account,
            deadline
        ).send({
            from: account
        });
        setApproveBtnState(false);
        setSwapBtnState(false);
    }

    return (
        <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
            <ThemeProvider theme={theme}>
                <Stack direction="column" sx={{ p: "0 5.2%" }}>
                    <ActiveStack direction="column" alignItems="center" sx={{ p: "70px 0 0" }}>
                        <Typography variant='h5' align="center" sx={{ p: "16px 0" }}>THE MOST EFFICIENT DEFI AGGREGATOR</Typography>
                        <Typography align="center" sx={{ maxWidth: "761px", color: "#808080", fontSize: "18px" }}>Access the most liquidity, lowest slippage and best exchange rates across Ethereum,
                            Binance Smart Chain, Polygon, Optimistic Ethereum (OΞ) and Arbitrum.</Typography>
                    </ActiveStack>
                    <Grid container justifyContent="space-between">
                        <ActiveGrid xs={12} md={7} sx={{ margin: "80px 0 130px" }} className='responsive3'>
                            <Paper sx={{ width: "100%", height: "630px", background: "#191919" }}>
                                <FormControl sx={{ width: "150px", margin: "20px 45px" }}>
                                    <InputLabel id="token-select-label3">Token</InputLabel>
                                    <Select
                                        labelId="token-select-label3"
                                        id="token-select3"
                                        value={token3}
                                        label="Token3"
                                        onChange={TokenSelect3}
                                        color="primary"
                                    >
                                        <MenuItem value="WETH/DAI">WETH/DAI</MenuItem>
                                        <MenuItem value="BNB">BNB</MenuItem>
                                        <MenuItem value="MATIC">MATIC</MenuItem>
                                    </Select>
                                </FormControl>
                            </Paper>
                        </ActiveGrid>
                        <Grid xs={12} md={activeRate === 11 ? 12 : activeRate} container direction="column" alignItems="center">
                            <SwapPaper variant='outlined' sx={{ background: "#191919", borderRadius: "12px", maxWidth: "476px", width: "100%", borderColor: "white" }}>
                                <Box sx={{ m: "0 8% 25px" }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Stack direction="row" justifyContent="space-between" sx={{ width: "45%", maxWidth: "200px" }} spacing={1}>
                                            <CustomTab text={["Swap", "Limit"]} padding={20} tabValue={swapTabValue} setTabValue={setSwapTabValue} position={"top"} />
                                        </Stack>
                                        <Stack direction="row" spacing={1}>
                                            <IconButton sx={{ color: "white" }}><Typography component="img" src={Refresh}></Typography></IconButton>
                                            <IconButton sx={{ color: "white" }} onClick={swapSettingDialogOpen}><Typography component="img" src={Filter}></Typography></IconButton>
                                        </Stack>
                                    </Stack>
                                    {swapTabValue === 0 &&
                                        <Stack direction="column" alignItems="center">
                                            <Paper sx={{ width: "100%", background: "#101010", borderRadius: "12px", mt: "25px" }}>
                                                <Stack direction="column" sx={{ p: "12px 24px" }}>
                                                    <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>From</Typography>
                                                    <Stack direction="row" spacing={2} alignItems="center" sx={{ p: "10px 0" }}>
                                                        <Button startIcon={token1.logoURI !== null ?
                                                            <Avatar src={token1.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                            :
                                                            <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{token1.symbol.substring(0, 1)}</Avatar>} endIcon={<ExpandMoreIcon />} sx={{ fontSize: "16px", color: "white" }} onClick={() => setTokenDialogState(1)}>{token1.symbol}</Button>
                                                        <Input className='swap_input' color="primary" placeholder='0.0' type='number' variant="standard" inputRef={input_amount} onChange={(e) => setSwapAmount(e.target.value)} sx={{ color: "white", fontSize: "20px" }} />
                                                    </Stack>
                                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#34F14B" }}>
                                                        <Typography sx={{ fontSize: "14px" }}>Wrapped Ether</Typography>
                                                        <Typography sx={{ fontSize: "14px" }}>~$3,216</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                            <IconButton aria-label="swap" sx={{ color: "white" }} onClick={tokenChange}>
                                                <ArrowCircleDownIcon />
                                            </IconButton>
                                            <Paper sx={{ margin: "0 0 24px", width: "100%", background: "#101010", borderRadius: "12px" }}>
                                                <Stack direction="column" sx={{ p: "12px 24px" }}>
                                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#7E8B74" }}>
                                                        <Typography sx={{ fontSize: "14px" }}>To (estimated)</Typography>
                                                        <Typography sx={{ fontSize: "14px" }}>Balance: 0.00</Typography>
                                                    </Stack>
                                                    <Stack alignItems="flex-start" sx={{ p: "10px 0 6px" }}>
                                                        <Button startIcon={token2.logoURI !== null ?
                                                            <Avatar src={token2.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                            :
                                                            <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{token2.symbol.substring(0, 1)}</Avatar>} endIcon={<ExpandMoreIcon />} sx={{ fontSize: "16px", color: "white" }} onClick={() => setTokenDialogState(2)}>{token2.symbol}</Button>
                                                    </Stack>
                                                    <Stack alignItems="flex-start" sx={{ p: "4px 0" }}>
                                                        <Chip size='small' label='Primary' sx={{ color: "white", background: "#37AF43", borderRadius: "6px" }} />
                                                    </Stack>
                                                    <Paper sx={{ margin: "0 0 8px", cursor: "pointer", background: "#161714", color: "white", border: `1px solid ${swapSelectData === 'Lambswap' ? "#34F14B" : "#7E8B74"}`, borderRadius: "12px" }} onClick={() => setSwapSelectData('Lambswap', setSwapSelectState(false))}>
                                                        <Stack direction="column" sx={{ p: "14px 8px", color: `${swapSelectData !== 'Lambswap' && "#7E8B74"}` }}>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Typography gutterBottom>Lambswap</Typography>
                                                                <Typography gutterBottom>{output_amount}</Typography>
                                                            </Stack>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Typography sx={{ fontSize: "14px", color: `${swapSelectData === 'Lambswap' ? "#34F14B" : "#7E8B74"}` }}>Tx cost 0.0233 = (~$80.43)</Typography>
                                                                <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>~$2,426 (-0.06%)</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Paper>
                                                    <Paper sx={{ margin: "0 0 8px", cursor: "pointer", background: "#161714", color: "white", border: `1px solid ${swapSelectData === swapSelectOrder[0] ? "#34F14B" : "#7E8B74"}`, borderRadius: "12px" }}
                                                        onClick={() => setSwapSelectOrder([swapSelectOrder[0], swapSelectOrder[1]], setSwapSelectData(swapSelectOrder[0]))}>
                                                        <Stack direction="column" sx={{ p: "14px 8px", color: `${swapSelectData !== swapSelectOrder[0] && "#7E8B74"}` }}>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Stack direction="row" spacing={1} onClick={() => setSwapSelectState(swapSelectState ? false : true)}>
                                                                    <Typography gutterBottom>{swapSelectOrder[0]}</Typography>
                                                                    <ExpandMoreIcon />
                                                                </Stack>
                                                                <Typography gutterBottom>32123.0245</Typography>
                                                            </Stack>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Typography sx={{ fontSize: "14px", color: `${swapSelectData === swapSelectOrder[0] ? "#34F14B" : "#7E8B74"}` }}>Tx cost 0.0233 = (~$80.43)</Typography>
                                                                <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>~$2,426 (-0.06%)</Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Paper>
                                                    {swapSelectState &&
                                                        <Paper sx={{ margin: "0 0 8px", cursor: "pointer", background: "#161714", color: "white", border: "1px solid #7E8B74", borderRadius: "12px" }} onClick={() => setSwapSelectOrder([swapSelectOrder[1], swapSelectOrder[0]], setSwapSelectState(false), setSwapSelectData(swapSelectOrder[1]))}>
                                                            <Stack direction="column" sx={{ p: "14px 8px", color: "#7E8B74" }}>
                                                                <Stack direction="row" justifyContent="space-between">
                                                                    <Typography gutterBottom>{swapSelectOrder[1]}</Typography>
                                                                    <Typography gutterBottom>3 214.09829</Typography>
                                                                </Stack>
                                                                <Stack direction="row" justifyContent="space-between">
                                                                    <Typography sx={{ fontSize: "14px" }}>Tx cost 0.0233 = (~$80.43)</Typography>
                                                                    <Typography sx={{ fontSize: "14px" }}>~$2,426 (-0.06%)</Typography>
                                                                </Stack>
                                                            </Stack>
                                                        </Paper>
                                                    }
                                                </Stack>
                                            </Paper>
                                            {
                                                active ?
                                                    swapBtnState ?
                                                        <SwapButton disabled={approveBtnState} onClick={tokenSwap}>swap</SwapButton>
                                                        :
                                                        <SwapButton disabled={approveBtnState} onClick={tokenApprove}>Give permission to use {token1.symbol}</SwapButton>
                                                    :
                                                    <SwapButton onClick={() => setIsOpenDialog(true)}>Connect Wallet</SwapButton>
                                            }
                                        </Stack>
                                    }
                                    {swapTabValue === 1 &&
                                        <Stack direction="column" alignItems="center">
                                            <Paper sx={{ width: "100%", background: "#101010", borderRadius: "12px", mt: "25px" }}>
                                                <Stack direction="column" sx={{ p: "12px 24px" }}>
                                                    <Typography gutterBottom sx={{ fontSize: "14px", color: "#7E8B74" }}>From</Typography>
                                                    <Stack direction="row" justifyContent="space-between" sx={{ p: "10px 0" }}>
                                                        <Button startIcon={<Avatar sx={{ width: "30px", height: "30px" }} src={token1.logoURI} />} endIcon={<ExpandMoreIcon />} sx={{ fontSize: "16px", color: "white" }} onClick={() => setTokenDialogState(1)}>{token1.symbol}</Button>
                                                        <Input className='swap_input' color="primary" type='number' variant="standard" sx={{ color: "white" }}></Input>
                                                    </Stack>
                                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#34F14B" }}>
                                                        <Typography sx={{ fontSize: "14px" }}>Wrapped Ether</Typography>
                                                        <Typography sx={{ fontSize: "14px" }}>~$3,216</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                            <IconButton aria-label="swap" sx={{ color: "white" }}>
                                                <ArrowCircleDownIcon />
                                            </IconButton>
                                            <Paper sx={{ margin: "0 0 24px", width: "100%", color: "white", border: "1px solid #808080", background: "#191919", borderRadius: "12px" }}>
                                                <Stack direction="column" sx={{ p: "12px 24px" }}>
                                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#7E8B74" }}>
                                                        <Typography gutterBottom sx={{ fontSize: "14px" }}>To (estimated)</Typography>
                                                        <Typography gutterBottom sx={{ fontSize: "14px" }}>Balance: 0.00</Typography>
                                                    </Stack>
                                                    <Stack alignItems="flex-start" sx={{ p: "10px 0" }}>
                                                        <Button startIcon={<Avatar sx={{ width: "30px", height: "30px" }} src={token2.logoURI} />} endIcon={<ExpandMoreIcon />} sx={{ fontSize: "16px", color: "white" }} onClick={() => setTokenDialogState(2)}>{token2.symbol}</Button>
                                                    </Stack>
                                                    <Paper sx={{ margin: "0 0 8px", background: "#161714", border: "1px solid #7E8B74", borderRadius: "12px" }}>
                                                        <Stack direction="column" sx={{ p: "14px 8px", color: "white" }}>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Typography gutterBottom>1inch</Typography>
                                                                <Typography gutterBottom>3 214.09829</Typography>
                                                            </Stack>
                                                            <Typography sx={{ fontSize: "14px", color: "#34F14B" }}>Tx cost 0.0233 = (~$80.43)</Typography>
                                                        </Stack>
                                                    </Paper>
                                                    <Paper sx={{ background: "#161714", border: "1px solid #7E8B74", borderRadius: "12px" }}>
                                                        <Stack direction="column" sx={{ p: "14px 8px", color: "#34F14B" }}>
                                                            <Stack direction="row" justifyContent="space-between">
                                                                <Typography gutterBottom>1inch</Typography>
                                                                <Typography gutterBottom>3 214.09829</Typography>
                                                            </Stack>
                                                            <Typography sx={{ fontSize: "14px", color: "#34F14B" }}>Tx cost 0.0233 = (~$80.43)</Typography>
                                                        </Stack>
                                                    </Paper>
                                                </Stack>
                                            </Paper>
                                            <Button variant='contained' color='primary' sx={{ width: "100%", color: "white", fontWeight: "700", fontSize: "16px", borderRadius: "12px" }}>Connect Wallet</Button>
                                        </Stack>
                                    }
                                </Box>
                            </SwapPaper>
                            <Stack direction="column" sx={{ maxWidth: "476px", width: "100%", m: "20px 0 230px" }} spacing={1}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography sx={{ fontSize: "14px" }}>Rate</Typography>
                                        <ExpandMoreIcon />
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography sx={{ fontSize: "14px" }}>1 BNB = 3199.7257 BNB (~$3,204)</Typography>
                                        <InfoOutlinedIcon />
                                    </Stack>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ fontSize: "14px" }}>Route</Typography>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Typography sx={{ fontSize: "14px" }}>{`BNB > ETH`}</Typography>
                                        <ExpandLessIcon />
                                    </Stack>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ fontSize: "14px" }}>Liquidity Provider Fee</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>0,001 BNB</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{ fontSize: "14px" }}>Gas refund</Typography>
                                    <Chip size='small' label='0% REFUND' sx={{ color: "white", background: "#37AF43", borderRadius: "6px" }} />
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </ThemeProvider>
            <Cwallet isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} tokenDialogState={tokenDialogState} setTokenDialogState={setTokenDialogState} chain={chainState} setChain={setChainState} selectToken={selectToken} swapSettingDialogState={swapSettingDialogState} setSwapSettingDialogState={setSwapSettingDialogState} />
        </Box>
    );
}