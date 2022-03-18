import React, { useState, useEffect } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    IconButton,
    TextField,
    useMediaQuery,
    Avatar,
    Autocomplete,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    Collapse
} from '@mui/material';

import { useWeb3React } from "@web3-react/core";
import Cwallet from "../../assets/constants/Cwallet";
import { styled, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

import Tx from '../../assets/img/common/liquidity-pool-parts 1.png'
import pool from '../../assets/img/common/sliders-h-Bold.png'
import detailIcon from '../../assets/img/common/sliders-h.png'
import ellipse from '../../assets/img/common/Ellipse 25.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { get_pools, filter_pool } from "../../services/pool/liquidity.service";

import './staked.css';

const PoolPaper = styled(Paper)(() => ({
    background: "transparent",
    borderRadius: "14px",
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#34F14B",
        },
        secondary: {
            main: '#FFFFFF',
        },
        background: {
            default: '#FFFFFF',
            paper: '#191919',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#7E8B74',
        }
    }
});

const ConnectButton = styled(Button)(() => ({
    color: "white",
    fontWeight: "300",
    borderRadius: "12px"
}));

function Detail(props) {
    const { active } = useWeb3React();
    const { data, openDetail, chain, setIsOpenDialog, setPoolCreateDialogState } = props;
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset !important' } }}>
                <TableCell sx={{ p: "24px 30px 24px 0" }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack direction="row" alignItems="center">
                            <Avatar sx={{ width: "30px", height: "30px" }} src={Tx} />&nbsp;&nbsp;
                            <Typography>{data.pair_address.slice(0, 4)}...{data.pair_address.slice(-4)}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            {data.token1_logoURI !== null ?
                                <Avatar src={data.token1_logoURI} sx={{ width: "30px", height: "30px" }} />
                                :
                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.token1_symbol.substring(0, 1)}</Avatar>
                            }
                            <Stack direction="column">
                                <Typography>{data.token1_symbol}</Typography>
                                <Typography sx={{ color: "#7E8B74" }}>50%</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            {data.token2_logoURI !== null ?
                                <Avatar sx={{ width: "30px", height: "30px" }} src={data.token2_logoURI} />
                                :
                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.token2_symbol.substring(0, 1)}</Avatar>
                            }
                            <Stack direction="column">
                                <Typography>{data.token2_symbol}</Typography>
                                <Typography sx={{ color: "#7E8B74" }}>50%</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </TableCell>
                <TableCell sx={{ p: "24px 30px" }}>
                    <Typography>${data.total_price}</Typography>
                </TableCell>
                <TableCell sx={{ p: "24px 30px" }}>
                    <Stack direction="row" alignItems="center">
                        <Typography>{data.apy}%</Typography>&nbsp;
                        <InfoOutlinedIcon sx={{ fontSize: "16px", color: "#7E8B74" }} />
                    </Stack>
                </TableCell>
                <TableCell sx={{ p: "24px 0 24px 30px" }} align="right">
                    <Button onClick={() => openDetail(chain.tokens.find(token => (token.address === data.token1_address)), chain.tokens.find(token => (token.address === data.token2_address)))} sx={{ background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.99) 100%)", minWidth: "0", width: "40px", mr: "15px", p: "10px 0", borderRadius: "10px" }}><Typography component="img" src={pool} /></Button>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setExpanded(!expanded)}
                    >
                        {expanded ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Grid container justifyContent="space-between">
                            <Grid md={8}>

                            </Grid>
                            <Grid md={3.9}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Liquidity</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>$6,785,673</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Volume (24h)</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>$31,313</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Earnings (24h)</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>$217</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", mt: "20px" }}>Total APY</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", ml: "12px" }}> – Pool APY</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px", ml: "12px" }}> – LDO Farming APY</Typography>
                                    <Typography sx={{ fontSize: "14px" }}>22.59%</Typography>
                                </Stack>
                                {active ?
                                    <Stack direction="row" spacing={2} sx={{ my: "22px" }}>
                                        <ConnectButton variant='contained' color='secondary' onClick={() => setPoolCreateDialogState({ title: 'Remove Liquidity', token1: chain.tokens.find(token => (token.address === data.token1_address)), token2: chain.tokens.find(token => (token.address === data.token2_address)) })}>Remove&nbsp;Liquidity</ConnectButton>
                                        <ConnectButton variant='contained' sx={{ background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)" }} onClick={() => setPoolCreateDialogState({ title: 'Provide Liquidity', token1: chain.tokens.find(token => (token.address === data.token1_address)), token2: chain.tokens.find(token => (token.address === data.token2_address)) })}>Provide&nbsp;Liquidity</ConnectButton>
                                    </Stack>
                                    :
                                    <ConnectButton variant='contained' onClick={() => setIsOpenDialog(true)} sx={{ width: "100%", my: "22px" }}>connect&nbsp;wallet</ConnectButton>
                                }
                            </Grid>
                        </Grid>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function pools({ chain, setIsOpenDialog }) {

    const matches600 = useMediaQuery('(min-width:600px)');
    const matches900 = useMediaQuery('(min-width:900px)');

    const [pools, setPools] = useState([]);
    const [detailState, setDetailState] = useState(false);
    const [detailState_1, setDetailState_1] = useState(false);
    const [detailData, setDetailData] = useState([]);
    const [detailData_1, setDetailData_1] = useState([]);
    const [poolCreateDialogState, setPoolCreateDialogState] = useState(false);
    const [searchText, setSearchText] = React.useState('');

    useEffect(() => {
        get_pools(chain.chainId)
            .then((data) => {
                if (data !== "NoResult") {
                    data.map((pool, index) => {
                        let token_1 = chain.tokens.find(token => (token.address === pool.token1_address));
                        let token_2 = chain.tokens.find(token => (token.address === pool.token2_address));
                        data[index].token1_symbol = token_1.symbol;
                        data[index].token2_symbol = token_2.symbol;
                        data[index].token1_logoURI = token_1.logoURI;
                        data[index].token2_logoURI = token_2.logoURI;
                    });
                }
                setPools(data);
            });
    }, [chain]);

    const openDetail = (token1, token2) => {
        setDetailState(true);
        setDetailData([token1, token2]);
    }

    const closeDetail = () => {
        setDetailState(false);
    }

    const openDetail_1 = (token1, token2) => {
        setDetailState_1(true);
        setDetailData_1([token1, token2]);
    }

    const closeDetail_1 = () => {
        setDetailState_1(false);
    }

    const tagDisplay = (value, getTagProps) => {
        filter_pool(value).then(data => {
            if (data !== "NoResult") {
                data.map((pool, index) => {
                    let token_1 = chain.tokens.find(token => (token.address === pool.token1_address));
                    let token_2 = chain.tokens.find(token => (token.address === pool.token2_address));
                    data[index].token1_symbol = token_1.symbol;
                    data[index].token2_symbol = token_2.symbol;
                    data[index].token1_logoURI = token_1.logoURI;
                    data[index].token2_logoURI = token_2.logoURI;
                });
            }
            setPools(data);
        })

        return (
            value.map((option, index) => (
                <Chip
                    key={index}
                    label={
                        <Stack direction="row" alignItems="center" {...getTagProps({ index })} spacing={1} key={index}>
                            {option.logoURI !== null ?
                                <Avatar src={option.logoURI} sx={{ width: "30px", height: "30px" }} />
                                :
                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{option.symbol.substring(0, 1)}</Avatar>
                            }
                            <Typography>{option.symbol}</Typography>
                        </Stack>
                    }
                    deleteIcon={<CloseIcon />}
                    {...getTagProps({ index })}
                    sx={{ background: "transparent" }}
                />
            ))
        )
    }

    return (
        <Box>
            <Grid>
                {detailState ?
                    <Box sx={{ p: "30px 3%" }}>
                        <Button startIcon={<ChevronLeftIcon />} sx={{ color: "#7E8B74" }} onClick={detailState_1 ? closeDetail_1 : closeDetail}>back</Button>
                        <Stack direction="row" alignItems="center" sx={{ m: "26px 0" }}>
                            {detailData[0].logoURI !== null ?
                                <Avatar src={detailData[0].logoURI} sx={{ width: "30px", height: "30px" }} />
                                :
                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{detailData[0].symbol.substring(0, 1)}</Avatar>
                            }
                            {detailData[1].logoURI !== null ?
                                <Avatar src={detailData[1].logoURI} sx={{ width: "30px", height: "30px", ml: "-8px" }} />
                                :
                                <Avatar sx={{ width: "30px", height: "30px", color: "white", ml: "-8px" }}>{detailData[1].symbol.substring(0, 1)}</Avatar>
                            }
                            &nbsp;&nbsp;
                            <Typography>{detailData[0].symbol}-{detailData[1].symbol}&nbsp;Pool</Typography>
                        </Stack>
                        <Grid container>
                            {detailState_1 ?
                                <Grid md={7.8} xs={12}>
                                    <PoolPaper variant='outlined' sx={{ p: "14px 12px 0" }}>
                                        <Typography>{detailData_1}</Typography>
                                        <Grid container direction="row" justifyContent="space-between" sx={{ p: "15px 3% 0" }}>
                                            <Grid container sm={6} xs={12} justifyContent={matches600 ? "flex-start" : "center"}>
                                                <Typography component="img" src={ellipse} sx={{ maxWidth: "100%", pt: "10px", pb: "14px" }} />
                                            </Grid>
                                            <Grid container direction="column" sm={6} xs={12}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Total&nbsp;Votes</Typography>
                                                    <Typography sx={{ fontSize: "18px" }}>$31,313,245.577</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: "7px" }}>
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Addresses</Typography>
                                                    <Typography sx={{ fontSize: "18px" }}>25</Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </PoolPaper>
                                    <Stack sx={{ mt: "45px" }}>
                                        <Typography sx={{ color: "#7E8B74", fontSize: "14px", mb: "10px" }}>
                                            Liquidity providers earn fees from each trade. A fee is charged on the input value of each trade.
                                        </Typography>
                                        <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>
                                            Votes are counted, and a parameter’s value is changed gradually during DecayTime after voting. Liquidity providers can change default values separately for each pool. They are determined by liquidity providers using a similar voting system. You can vote or change your vote at any time.
                                        </Typography>
                                    </Stack>
                                </Grid>
                                :
                                <Grid container md={7.8} xs={12} justifyContent="space-between">
                                    {['Swap Fee', 'Decay Time', 'Price Impact Fee'].map((data, index) => (
                                        <Grid xs={12} sm={3.95} md={3.95} sx={{ pt: `${matches600 ? 0 : 8}px` }} key={index}>
                                            <PoolPaper variant='outlined' sx={{ p: "6px 12px 12px" }}>
                                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                    <Typography>{data}</Typography>
                                                    <IconButton onClick={() => openDetail_1(data)}><Typography component="img" src={detailIcon} /></IconButton>
                                                </Stack>
                                                <Stack direction="row" justifyContent="center" sx={{ mb: "25px", mt: "10px" }}>
                                                    <Typography component="img" src={ellipse} sx={{ maxWidth: "100%" }} />
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Total Votes</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>$31,313,245.577</Typography>
                                                </Stack>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Addresses</Typography>
                                                    <Typography sx={{ fontSize: "14px" }}>25</Typography>
                                                </Stack>
                                            </PoolPaper>
                                        </Grid>
                                    ))
                                    }
                                </Grid>
                            }
                            <Grid md={4.2} xs={12} sx={{ pl: `${matches900 ? 2.2 : 0}%`, pt: `${matches900 ? 0 : 8}px` }}>
                                {detailState_1 ?
                                    <Stack>
                                        <Typography sx={{ fontSize: "14px", m: "10px 0" }}>How it works?</Typography>
                                        <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>
                                            1INCH liquidity protocol is a constant-product AMM with the addition of virtual balances. Virtual balances were introduced to redirect some arbitrageur profits to liquidity provider. The pool parameter is regulated by Mooniswap formulas.
                                        </Typography>
                                    </Stack>
                                    :
                                    <PoolPaper variant='outlined' sx={{ p: `25px ${matches600 ? 8 : 5}%` }}>
                                        <Stack direction="row" alignItems="center">
                                            <Typography component="img" src={detailData[0].logo}></Typography>
                                            <Typography component="img" src={detailData[1].logo} sx={{ ml: "-8px" }}></Typography>&nbsp;&nbsp;
                                            <Typography>{detailData[0].name}-{detailData[1].name}&nbsp;Pool</Typography>
                                        </Stack>
                                        <Stack sx={{ m: "25px 0 14px" }}>
                                            <Typography sx={{ fontSize: "14px", mb: "8px" }}>What more LST tokens?</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 1. Choose one of the farming pools</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 2. Provide Liquidity and receive your LP Tokens</Typography>
                                            <Typography sx={{ fontSize: "14px", color: "#7E8B74" }}>Step 3. Stake Your LP Tokens</Typography>
                                        </Stack>
                                        <Button variant='contained' sx={{ color: "white", width: "100%", borderRadius: "12px" }}>connect wallet</Button>
                                    </PoolPaper>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                    :
                    <Box>
                        <Grid sx={{ padding: "70px 0 30px" }}>
                            <Typography sx={{ fontSize: "18px", m: "0 5px 12px" }}>Filter</Typography>
                            <Stack direction="row" spacing={2}>
                                <ThemeProvider theme={theme}>
                                    <Autocomplete
                                        multiple
                                        className="pool-filter-i"
                                        getOptionLabel={(option) => option.symbol}
                                        options={chain.tokens}
                                        renderOption={(props, option) => (
                                            <Stack direction="row" spacing={1} alignItems="center" {...props} >
                                                {option.logoURI !== null ?
                                                    <Avatar src={option.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                    :
                                                    <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{option.symbol.substring(0, 1)}</Avatar>
                                                }
                                                <Stack direction="column">
                                                    <Typography>{option.symbol}</Typography>
                                                    <Typography sx={{ color: "#7E8B74" }}>{option.name}</Typography>
                                                </Stack>
                                            </Stack>
                                        )}
                                        renderTags={(value, getTagProps) =>
                                            tagDisplay(value, getTagProps)
                                        }
                                        sx={{ width: "100%" }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                id="LP_filter"
                                                placeholder="Enter Token Name."
                                                sx={{ background: "transparent" }}
                                            />
                                        )}
                                    />
                                </ThemeProvider>
                                <Button variant='outlined' onClick={() => setPoolCreateDialogState({ title: "Create Liquidity Pool", token1: chain.tokens[0], token2: chain.tokens[1] })} startIcon={<AddIcon />} sx={{ color: "#7E8B74", borderRadius: "12px", borderColor: "#7E8B74", p: "0 20px" }}>
                                    Create&nbsp;{matches600 ? "" : " "}Pool
                                </Button>
                            </Stack>
                        </Grid>
                        <Box sx={{ overflow: "auto" }}>
                            <Box sx={{ minWidth: "900px", p: "0 3%" }}>
                                <TableContainer component={Paper} sx={{ background: "transparent" }}>
                                    <Table aria-label="simple table" sx={{ mt: "20px" }}>
                                        <TableHead>
                                            <TableRow sx={{ '&:first-child th, &:first-child td': { border: 0 } }}>
                                                <TableCell sx={{ p: "4px 30px 4px 0px", fontSize: "18px", color: "#7E8B74" }}>Pool</TableCell>
                                                <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Liquidity</TableCell>
                                                <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>APY</TableCell>
                                                <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {pools === "NoResult" ?
                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: 0, borderTop: 0 }} colSpan={4}>
                                                        <Typography align='center' sx={{ fontSize: "20px", color: "#7E8B74", pt: "40px", margin: 'auto' }}>No Pool Created</Typography>
                                                    </TableCell>
                                                </TableRow>
                                                :
                                                pools.map((data, index) => (
                                                    <Detail key={index} data={data} openDetail={openDetail} chain={chain} setIsOpenDialog={setIsOpenDialog} setPoolCreateDialogState={setPoolCreateDialogState} />
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </Box>
                    </Box>
                }
            </Grid>
            <Cwallet poolCreateDialogState={poolCreateDialogState} setPoolCreateDialogState={setPoolCreateDialogState} chain={chain} setIsOpenDialog={setIsOpenDialog} setPools={setPools} />
        </Box>
    );
}