import React, { useState } from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    IconButton,
    Divider,
    Container,
    Link,
    Chip,
    Input,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    TablePagination,
    useMediaQuery,
    Avatar
} from '@mui/material';

import Cwallet from "../../../assets/constants/Cwallet";
import { styled } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import NorthEastIcon from '@mui/icons-material/NorthEast';

import Tx from '../../../assets/img/common/liquidity-pool-parts 1.png'
import detailIcon from '../../../assets/img/common/sliders-h.png';
import ellipse from '../../../assets/img/common/Ellipse 25.png'
import { CustomTab } from '../../../config/style';
import Filter from '../../../assets/img/common/filter.png';

const PoolPaper = styled(Paper)(() => ({
    background: "transparent",
    borderRadius: "14px",
    borderColor: "#808080"
}))

export default function governance({ chainState }) {
    const matches470 = useMediaQuery('(min-width:470px)');
    const matches750 = useMediaQuery('(min-width:750px)');
    const matches1024 = useMediaQuery('(min-width:1024px)');

    const [activeState, setActiveState] = useState(1);
    const [tokenDialogState, setTokenDialogState] = useState(false);
    const [token, setToken] = useState(chainState.tokens[0]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [tabValue, setTabValue] = useState(0);

    const selectToken = (data) => {
        setToken(data);
    }

    const changePage = (event, newPage) => {
        setPage(newPage);
    };

    const changeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ p: "100px 0" }}>
            <Container>
                <Typography sx={{ fontSize: "36px", fontWeight: "bold", mb: "30px" }}>Governance</Typography>
                <Grid container>
                    <Grid md={matches1024 ? 7.25 : 12} sm={12} sx={{ overflow: "auto" }}>
                        <Stack direction="row" justifyContent="space-around" spacing={2} sx={{ minWidth: "550px" }}>
                            <Link sx={{ fontSize: "18px", color: `${activeState === 1 ? "#37AF43" : "#7E8B74"} !important` }} onClick={() => setActiveState(1)} underline='none'>Liquidity&nbsp;Protocol</Link>
                            <Link sx={{ fontSize: "18px", color: `${activeState === 2 ? "#37AF43" : "#7E8B74"} !important` }} onClick={() => setActiveState(2)} underline='none'>Aggregation&nbsp;Protocol</Link>
                            <Stack direction="row" spacing={1}>
                                <Link sx={{ fontSize: "18px", color: `${activeState === 3 ? "#37AF43" : "#7E8B74"} !important` }} onClick={() => setActiveState(3)} underline='none'>Other&nbsp;Protocols</Link>
                                <Chip size='small' label='Coming Soon' sx={{ color: "white", bgcolor: "#37AF43", borderRadius: "6px" }} />
                            </Stack>
                        </Stack>
                        <Divider sx={{ bgcolor: "#808080", m: "20px 0 22px", minWidth: "550px" }} />
                    </Grid>
                    <Grid container md={12} justifyContent="space-between">
                        <Grid md={7.25} sm={12}>
                            <Grid container justifyContent="space-between">
                                {['Swap Fee', 'Decay Time', 'Price Impact Fee', 'Swap Fee', 'Decay Time', 'Price Impact Fee'].map((data, index) => (
                                    <Grid xs={matches470 ? 5.8 : 12} sm={matches750 ? 3.8 : 5.8} md={5.8} lg={3.8} key={index} sx={{ p: "8px 0" }}>
                                        <PoolPaper variant='outlined' sx={{ p: "6px 12px 12px" }}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                                <Typography>{data}</Typography>
                                                <IconButton><Typography component="img" src={detailIcon} /></IconButton>
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
                            <Typography sx={{ p: "40px 0", color: "#7E8B74" }}>
                                {`Instant Governance is a community tool for setting optimal pool configuration parameters. 
                                Each liquidity provider can vote on parameter values using their staked LP tokens. 
                                Pool governance enables the configuration of parameters that are specific to each pool. 
                                Users can vote to change 1inch’s core parameters. 
                                The weight of a vote depends on the amount of 1INCH tokens staked by a user. 
                                Parameters with default prefixes are used as default vote results for liquidity providers who do not participate in pool governance. 
                                If a user has not voted, the calculation takes into account the parameter’s default value multiplied by the user's vote’s weight. `}
                            </Typography>
                        </Grid>
                        <Grid container md={4.25} sm={12} justifyContent="center">
                            <PoolPaper variant='outlined' sx={{ mt: "8px", maxWidth: "442px", width: "100%" }}>
                                <Stack sx={{ p: "0 7%" }}>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Stack direction="row" justifyContent="space-between" sx={{ width: "70%" }} spacing={1}>
                                            <CustomTab text={["State token", "Unstake token"]} padding={20} tabValue={tabValue} setTabValue={setTabValue} position={"top"} />
                                        </Stack>
                                        <IconButton><Typography component="img" src={Filter} /></IconButton>
                                    </Stack>
                                    <Typography sx={{ color: "#7E8B74", p: "15px 0" }}>Amount</Typography>
                                    <Paper sx={{ width: "100%", bgcolor: "#000000", borderRadius: "12px", mb: "30px" }}>
                                        <Stack direction="column" sx={{ padding: "12px 24px" }}>
                                            <Stack direction="row" justifyContent="space-between" sx={{ color: "#7E8B74" }}>
                                                <Typography sx={{ fontSize: "14px" }}>{token.name}</Typography>
                                                <Typography sx={{ fontSize: "14px" }}>~$3,216</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={2} sx={{ padding: "10px 0" }}>
                                                <Button
                                                    startIcon={
                                                        token.logoURI !== null ?
                                                            <Avatar src={token.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                            :
                                                            <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{token.symbol.substring(0, 1)}</Avatar>
                                                    }
                                                    endIcon={<ExpandMoreIcon />}
                                                    sx={{ fontSize: "16px", color: "white" }}
                                                    onClick={() => setTokenDialogState(true)}
                                                >
                                                    {token.symbol}
                                                </Button>
                                                <Input className='swap_input' color="primary" type='number' variant="standard" placeholder='0.0' sx={{ color: "white", fontSize: "18px" }} />
                                            </Stack>
                                            <Stack direction="row" spacing={1}>
                                                <Button color="inherit" sx={{ borderRadius: "9px", bgcolor: "rgba(126, 139, 116, 0.17)", p: "5px 10px", minWidth: "0", color: "#7E8B74" }}>25%</Button>
                                                <Button color="inherit" sx={{ borderRadius: "9px", bgcolor: "rgba(126, 139, 116, 0.17)", p: "5px 10px", minWidth: "0", color: "#7E8B74" }}>50%</Button>
                                                <Button color="inherit" sx={{ borderRadius: "9px", bgcolor: "rgba(126, 139, 116, 0.17)", p: "5px 10px", minWidth: "0", color: "#7E8B74" }}>75%</Button>
                                                <Button color="inherit" sx={{ borderRadius: "9px", bgcolor: "rgba(126, 139, 116, 0.17)", p: "5px 10px", minWidth: "0", color: "#7E8B74" }}>100%</Button>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                    <Button onClick={() => setIsOpenDialog(true)} sx={{ width: "100%", color: "white", fontWeight: "700", fontSize: "16px", borderRadius: "12px", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)", }}>Connect Wallet</Button>
                                    <Stack sx={{ m: "30px 0" }}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Voting Balance</Typography>
                                            <Typography>...</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Voting Balance</Typography>
                                            <Typography>...</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </PoolPaper>

                            <PoolPaper variant='outlined' sx={{ mt: "24px", maxWidth: "442px", width: "100%" }}>
                                <Stack sx={{ p: "18px 4%" }}>
                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#7E8B74" }}>
                                        <Typography sx={{ fontSize: "14px" }}>Voting Addresses</Typography>
                                        <Typography sx={{ fontSize: "14px" }}>Staked Tokens</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" sx={{ m: "16px 0" }}>
                                        <Typography sx={{ fontSize: "16px" }}>5,318</Typography>
                                        <Typography sx={{ fontSize: "16px" }}>26,724,494.365</Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" sx={{ color: "#7E8B74" }}>
                                        <Stack direction="row" alignItems="center">
                                            <SouthEastIcon sx={{ fontSize: "16px", color: "red" }} />
                                            <Typography sx={{ fontSize: "12px", color: "red" }}>-0,17%</Typography>&nbsp;&nbsp;
                                            <Typography sx={{ fontSize: "12px" }}>vs last week</Typography>
                                        </Stack>
                                        <Stack direction="row" alignItems="center">
                                            <SouthEastIcon sx={{ fontSize: "16px", color: "red" }} />
                                            <Typography sx={{ fontSize: "12px", color: "red" }}>-0,17%</Typography>&nbsp;&nbsp;
                                            <Typography sx={{ fontSize: "12px" }}>vs last week</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </PoolPaper>
                            <Stack sx={{ maxWidth: "442px", width: "100%" }}>
                                <Typography sx={{ fontSize: "14px", p: "20px 0 10px" }}>How it works?</Typography>
                                <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>
                                    1INCH liquidity protocol is a constant-product AMM with the addition of virtual balances. Virtual balances were introduced to redirect some arbitrageur profits to liquidity provider. The pool parameter is regulated by Mooniswap formulas.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: "10px" }}>
                    <Typography sx={{ mt: "70px", fontSize: "24px" }}>Top Addresses by Voting Power</Typography>
                    <TableContainer component={Paper} sx={{ background: "transparent" }}>
                        <Table aria-label="simple table" sx={{ mt: "50px" }}>
                            <TableHead>
                                <TableRow sx={{ '&:first-child th, &:first-child td': { border: 0 } }}>
                                    <TableCell sx={{ p: "4px 30px 20px 0px", fontSize: "18px", color: "#7E8B74" }}>No</TableCell>
                                    <TableCell sx={{ p: "4px 30px 20px", fontSize: "18px", color: "#7E8B74" }}>Address</TableCell>
                                    <TableCell sx={{ p: "4px 30px 20px", fontSize: "18px", color: "#7E8B74" }}>Votes</TableCell>
                                    <TableCell align="center" sx={{ p: "4px 0px 20px 30px", fontSize: "18px", color: "#7E8B74" }}>Voting&nbsp;Power</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[...new Array(153)].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child th, &:last-child td': { border: 0 } }}
                                    >
                                        <TableCell sx={{ p: "24px 30px 24px 0" }}>
                                            <Typography>{page * rowsPerPage + index + 1}</Typography>
                                        </TableCell>
                                        <TableCell sx={{ p: "24px 30px" }}>
                                            <Stack direction="row" alignItems="center">
                                                <Typography component='img' src={Tx} />&nbsp;&nbsp;
                                                <Typography>0x46eea8d5b37d2db51f35c1bc8c50cbf80fb0ffe5</Typography>
                                                <IconButton><NorthEastIcon sx={{ color: "#7E8B74" }} /></IconButton>
                                            </Stack>
                                        </TableCell>
                                        <TableCell sx={{ p: "24px 30px" }}>
                                            <Typography>3,000,000</Typography>
                                        </TableCell>
                                        <TableCell sx={{ p: "24px 0 24px 30px" }} align="center">
                                            <Typography>11.23%</Typography>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                    component="div"
                    count={[...new Array(153)].length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={changePage}
                    onRowsPerPageChange={changeRowsPerPage}
                />
            </Container>
            <Cwallet isOpen={isOpenDialog} setIsOpen={setIsOpenDialog} tokenDialogState={tokenDialogState} setTokenDialogState={setTokenDialogState} chain={chainState} selectToken={selectToken} />
        </Box>
    )
}