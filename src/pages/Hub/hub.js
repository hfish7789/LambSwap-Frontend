import * as React from 'react';
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
    Avatar
} from '@mui/material';

import { useWeb3React } from "@web3-react/core";
import Web3 from 'web3';
import { CustomTab } from '../../config/style';

import { styled } from '@mui/material/styles';
// import { ThemeProvider } from '@emotion/react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import eth from '../../assets/img/common/eth.png';
import Crypto9 from '../../assets/img/common/crypto-9.png';
import Weth2 from '../../assets/img/common/weth2.png';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Chains } from "../../assets/constants/wallets";

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

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 7,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#7E8B74"
    },
}));

export default function hub({ chainState, tabValue, setTabValue }) {
    const matches600 = useMediaQuery('(min-width:600px)');
    const matches900 = useMediaQuery('(min-width:900px)');

    const [detailValue, setDetailValue] = React.useState();
    const [iconState, setIconState] = React.useState(0);
    const [token1, setToken1] = React.useState(chainState.tokens[0].symbol);
    const [token2, setToken2] = React.useState(chainState.tokens[1].symbol);
    const { active, account } = useWeb3React();
    const web3 = new Web3(window.ethereum);
    const BN = web3.utils.BN;
    
    React.useEffect(() => {
        setToken1(chainState.tokens[0].symbol);
        setToken2(chainState.tokens[1].symbol);
    }, [chainState])

    React.useEffect(() => {
        setTabValue(tabValue);
    }, [tabValue])

    const [crossPools, setCrossPools] = React.useState([{
        tvl: 21.59,
        vol: 407.04,
        apy: 3.68,
        rewards: 407.04,
        pool: "ETH",
        pool_info: "WETH (ERC-20) + ETH (BEP-20) + ETH (SPL-20) + ETH (ARC-20s)",
        logo: Chains[1].logo3
    }]);
    const array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const [liquidityItems, setLiquidityItems] = React.useState([1, 1, 1, 1, 1, 1]);

    const hubPageChange = (newValue) => {
        setTabValue(newValue);
    }

    const more = (newValue, state) => {
        if (newValue === detailValue) {
            setIconState(state);
        } else {
            if (iconState === 1) {
                setIconState(1);
            } else {
                setIconState(state);
            }
        }
        setDetailValue(newValue);
    }

    const TokenChange1 = (event) => {
        if (event.target.value === token2) {
            setToken2(token1);
        }
        setToken1(event.target.value);
    };
    const TokenChange2 = (event) => {
        if (event.target.value === token1) {
            setToken1(token2);
        }
        setToken2(event.target.value);
    };

    return (
        <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
            {tabValue === 2 ?
                <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)", p: "42px 0 145px" }}>
                    <Container maxWidth="lg">
                        <Paper sx={{ background: "#191919", borderRadius: "14px", maxWidth: "100%", p: "48px 4.72%", m: "38px 0" }}>
                            <Paper sx={{ background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.14) 100%)", maxWidth: "100%", borderRadius: "14px", p: "26px 2.2%" }}>
                                <Grid container justifyContent="space-between">
                                    <Grid xs={12} sm={5}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>You pay</Typography>
                                            <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>Balance: 0 ETH&nbsp;<Link underline='none' sx={{ color: "#34F14B !important" }}>max</Link></Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ padding: "10px 0" }}>
                                            <Select
                                                id="demo-simple-select-helper"
                                                value={token1}
                                                onChange={TokenChange1}
                                                sx={{ height: "55px" }}
                                            >
                                                {chainState.tokens.slice(0, 20).map((data, index) => (
                                                    <MenuItem value={data.symbol} key={index}>
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
                                            <Input className='swap_input' color="primary" placeholder='0.0' type='number' variant="standard" sx={{ color: "white", fontSize: "24px" }}></Input>
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
                                        <Typography sx={{ fontSize: "16px", color: "#7E8B74" }}>You will receive HRC-20</Typography>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ padding: "10px 0" }}>
                                            <Select
                                                id="demo-simple-select-helper"
                                                value={token2}
                                                onChange={TokenChange2}
                                                sx={{ height: "55px" }}
                                            >
                                                {chainState.tokens.slice(0, 20).map((data, index) => (
                                                    <MenuItem value={data.symbol} key={index}>
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
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography variant='p'>From:</Typography>
                                        <Typography variant='p'>To:</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Button variant="contained" color='secondary' sx={{ color: "#B1BAB2", width: "30%", borderRadius: "12px", fontWeight: "700" }}>swap</Button>
                            </Grid>
                        </Paper>
                        <Box sx={{ borderRadius: "14px", p: "4.34%" }}>
                            <Typography variant='h5' sx={{ color: "white", marginBottom: "30px" }}>Cross-chain&nbsp;Pool</Typography>
                            {
                                array.map((data, index) => (
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
                                                            <Typography component="img" src={eth}></Typography>
                                                            <Typography sx={{ color: "#34F14B", fontSize: "14px" }}>&nbsp;{crossPools[0].pool}-Pool:&nbsp;</Typography>
                                                            <Typography sx={{ fontSize: "14px" }}>{crossPools[0].pool_info}</Typography>
                                                        </Stack>
                                                        <Stack direction="row" spacing={0.5}>
                                                            <HubButton size="small" sx={{ background: "rgba(52, 241, 75, 0.06)", margin: "0 10px", color: "#34F14B" }} onClick={() => hubPageChange(0)}>Deposit</HubButton>
                                                            <HubButton size="small" sx={{ background: "rgba(40, 73, 175, 0.21)", color: "#4C6DD1" }} onClick={() => hubPageChange(1)}>Withdraw</HubButton>
                                                        </Stack>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2} justifyContent="flex-end" alignItems="flex-end">
                                                <Typography component="img" src={Chains[index].logo3} sx={{ maxWidth: "100%" }}></Typography>
                                            </Grid>
                                        </Grid>
                                    </HubPaper>
                                ))
                            }
                        </Box>
                        <Paper sx={{ background: "#232121", borderRadius: "14px", p: "2.48%", mt: "145px" }}>
                            <Grid container direction='column'>
                                <Typography sx={{ color: "white", p: "0 0 18px" }}>Total Pool Deposits & Daily Volume</Typography>
                                <Typography gutterBottom variant='p' sx={{ color: "#7E8B74" }}>Total&nbsp;pool&nbsp;deposit: $ 75,790,000,000</Typography>
                                <Typography variant='p' sx={{ color: "#7E8B74" }}>Daily volume: $&nbsp;2,260,000,000</Typography>
                            </Grid>
                        </Paper>
                    </Container>
                </Box>
                :
                <Box sx={{ p: "7.3% " }}>
                    <Paper sx={{ background: "#232121", p: "26px", borderRadius: "20px", overflow: "auto" }}>
                        <Grid container sx={{ minWidth: "500px" }}>
                            <Grid xs={4} direction="column">
                                <Stack direction="row" sx={{ color: "#7E8B74" }}>
                                    <Typography sx={{ color: "#34F14B" }}>LP-ETH</Typography>&nbsp;BALANCE
                                </Stack>
                                <Typography sx={{ color: "white" }}>--</Typography>
                                <Typography sx={{ color: "#7E8B74" }}>=＄ --</Typography>
                            </Grid>
                            <Grid xs={4} direction="column">
                                <Stack direction="row" sx={{ color: "#7E8B74" }}>
                                    <Typography sx={{ color: "#34F14B" }}>LP-ETH</Typography>&nbsp;STAKED
                                </Stack>
                                <Typography sx={{ color: "white" }}>--</Typography>
                                <Typography sx={{ color: "#7E8B74" }}>=＄ --</Typography>
                            </Grid>
                            <Grid xs={4} direction="column">
                                <Stack direction="row" sx={{ color: "#7E8B74" }}>
                                    <Typography sx={{ color: "#34F14B" }}>LST</Typography>&nbsp;EARNED
                                </Stack>
                                <Typography sx={{ color: "white" }}>--</Typography>
                                <Typography sx={{ color: "#7E8B74" }}>=＄ --</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper sx={{ background: "#232121", borderRadius: "14px", margin: "68px 0", px: "5%" }}>
                        <Stack direction="row" justifyContent="space-around">
                            <CustomTab text={["Add Liquidity", "Remove Liquidity"]} padding={20} tabValue={tabValue} setTabValue={setTabValue} position={"top"} />
                        </Stack>
                        {tabValue === 0 &&
                            <Box>
                                {liquidityItems.map((data, index) => (
                                    <HubPaper sx={{ p: "25px 34px", overflow: "auto" }} key={index}>
                                        <Grid container justifyContent="space-between" sx={{ minWidth: "580px" }}>
                                            <Grid xs={5.5}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                    <Stack direction="row" alignItems="center">
                                                        <Typography component="img" src={Weth2}></Typography>&nbsp;
                                                        <Typography sx={{ color: "white" }}>WETH</Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center">
                                                        <Input className='swap_input' placeholder="0.0" color="primary" type='number' variant="standard" sx={{ color: "white", fontSize: "18px" }}></Input>&nbsp;
                                                        <Button size="small" sx={{ background: "rgba(52, 241, 75, 0.06)", margin: "0 10px", color: "#34F14B" }}>max</Button>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Divider orientation="vertical" flexItem>
                                            </Divider>
                                            <Grid xs={5.5}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                    <Stack direction="column">
                                                        <Typography sx={{ color: "#7E8B74" }}>Balance</Typography>
                                                        <Typography sx={{ color: "#7E8B74" }}>--</Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center">
                                                        <HubButton size="small" sx={{ background: "rgba(52, 241, 75, 0.06)", margin: "0 10px", color: "#34F14B" }}>Deposit</HubButton>
                                                        <Button sx={{ background: "rgba(126, 139, 116, 0.22)", borderRadius: "12px", minWidth: "0 !important" }} size="small" onClick={() => more(index, iconState === 0 ? 1 : 0)} >{detailValue === index ? iconState === 0 ? <ExpandMoreIcon /> : <ExpandLessIcon /> : <ExpandMoreIcon />} </Button>
                                                    </Stack>
                                                    <Stack direction="column">
                                                        <Typography sx={{ color: "#7E8B74" }}>Pay LP</Typography>
                                                        <Typography sx={{ color: "#7E8B74" }}>--</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        {
                                            (detailValue === index && iconState === 1) &&
                                            <Grid sx={{ p: "25px 0 0", width: "30%" }}>
                                                <Typography sx={{ color: "#7E8B74" }}>Poly Fee</Typography>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74" }}>From:</Typography>
                                                    <Typography sx={{ color: "#7E8B74" }}>To:</Typography>
                                                </Stack>
                                            </Grid>
                                        }
                                    </HubPaper>
                                ))
                                }
                            </Box>
                        }
                        {tabValue === 1 &&
                            <Box>
                                {liquidityItems.map((data, index) => (
                                    <HubPaper sx={{ p: "25px 34px", overflow: "auto" }} key={index}>
                                        <Grid container justifyContent="space-between" sx={{ minWidth: "580px" }}>
                                            <Grid xs={5.5}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                    <Stack direction="row" alignItems="center">
                                                        <Typography component="img" src={Weth2}></Typography>&nbsp;
                                                        <Typography sx={{ color: "white" }}>WETH</Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center">
                                                        <Input className='swap_input' placeholder="0.0" color="primary" type='number' variant="standard" sx={{ color: "white", fontSize: "18px" }}></Input>&nbsp;
                                                        <Button size="small" sx={{ background: "rgba(52, 241, 75, 0.06)", margin: "0 10px", color: "#34F14B" }}>max</Button>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                            <Divider orientation="vertical" flexItem>
                                            </Divider>
                                            <Grid xs={5.5}>
                                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                    <Stack direction="column">
                                                        <Typography sx={{ color: "#7E8B74" }}>Balance</Typography>
                                                        <Typography sx={{ color: "#7E8B74" }}>--</Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems="center">
                                                        <HubButton size="small" sx={{ background: "rgba(40, 73, 175, 0.21)", margin: "0 10px", color: "#4C6DD1" }}>withdraw</HubButton>
                                                        <Button sx={{ background: "rgba(126, 139, 116, 0.22)", borderRadius: "12px", minWidth: "0 !important", color: "#4C6DD1" }} size="small" onClick={() => more(index, iconState === 0 ? 1 : 0)} >{detailValue === index ? iconState === 0 ? <ExpandMoreIcon /> : <ExpandLessIcon /> : <ExpandMoreIcon />} </Button>
                                                    </Stack>
                                                    <Stack direction="column">
                                                        <Typography sx={{ color: "#7E8B74" }}>Pay LP</Typography>
                                                        <Typography sx={{ color: "#7E8B74" }}>--</Typography>
                                                    </Stack>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                        {
                                            detailValue === index && iconState === 1 &&
                                            <Grid sx={{ p: "25px 0 0", width: "30%" }}>
                                                <Typography sx={{ color: "#7E8B74" }}>Poly Fee</Typography>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74" }}>From:</Typography>
                                                    <Typography sx={{ color: "#7E8B74" }}>To:</Typography>
                                                </Stack>
                                            </Grid>
                                        }
                                    </HubPaper>
                                ))
                                }
                            </Box>
                        }
                        <Stack direction="row" justifyContent="right" sx={{ p: "10px 0 50px" }}>
                            <Typography sx={{ color: "#7E8B74" }}>Max slippage&nbsp;:&nbsp;</Typography>
                            <Typography sx={{ color: "#34F14B" }}>1%</Typography>
                        </Stack>
                    </Paper>
                    <Paper sx={{ borderRadius: "14px", background: "#232121" }}>
                        <Grid container>
                            <Grid xs={12} sm={7}>
                                <Stack direction="column" sx={{ p: `0 ${matches900 ? `90px` : `5%`} 32px` }}>
                                    <Stack direction="row" sx={{ p: "16px 0" }}>
                                        <Typography sx={{ color: "#7E8B74" }}>WETH&nbsp;+&nbsp;ETH&nbsp;+&nbsp;ETH&nbsp;:</Typography>
                                        <Typography sx={{ color: "white" }}>7,819,16</Typography>
                                    </Stack>
                                    {liquidityItems.map((data, index) => (
                                        <Stack direction="row" sx={{ p: "6px 0" }} key={index}>
                                            <Typography component="img" src={Weth2}></Typography>&nbsp;
                                            <Stack direction="column">
                                                <Stack direction="row">
                                                    <Typography variant='p' sx={{ color: "#7E8B74" }}>WETH:</Typography>
                                                    <Typography variant='p' sx={{ color: "white" }}>&nbsp;2,851.18&nbsp;</Typography>
                                                    <Typography variant='p' sx={{ color: "#7E8B74" }}>({36.464}%)</Typography>
                                                </Stack>
                                                <BorderLinearProgress variant="determinate" value={36.464} />
                                            </Stack>
                                        </Stack>
                                    ))
                                    }
                                </Stack>
                            </Grid>
                            {!matches600 &&
                                <Grid xs={6} sm={0}></Grid>
                            }
                            <Grid container xs={6} sm={5} justifyContent="flex-end" alignItems="flex-end" sx={{ minHeight: "200px" }}>
                                <Typography component="img" src={Crypto9} sx={{ maxWidth: "100%" }}></Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            }
        </Box>
    )
}