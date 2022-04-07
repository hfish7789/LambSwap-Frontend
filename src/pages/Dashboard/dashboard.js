import * as React from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    FormControlLabel,
    Radio,
    RadioGroup,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    TableHead,
    Container,
    Pagination,
    useMediaQuery,
    Chip
} from '@mui/material';

import { LPs } from "../../assets/constants/wallets";
import { styled } from '@mui/material/styles';

const DashPaper1 = styled(Paper)(() => ({
    borderRadius: "20px",
    background: "#232121",
    padding: "24px"
}));
const DashPaper2 = styled(Paper)(() => ({
    borderRadius: "12px",
    background: "#232121",
}));

const DashMenuItem = styled(MenuItem)(() => ({
    fontSize: "14px",
    padding: "10px 50px"
}));

const TableTypography = styled(Typography)(() => ({
    fontSize: "18px"
}));

const DashButton = styled(Button)(() => ({
    color: "white",
    borderRadius: "30px",
    maxWidth: "160px",
    width: "100%",
    background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)",
    fontWeight: 550
}));

export default function vault() {
    const matches425 = useMediaQuery('(min-width:425px)');

    const [poolChart, setPoolChart] = React.useState(1);
    const [liquiditys, setLiquiditys] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [vaults, setVaults] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [transactions, setTransactions] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [page, setPage] = React.useState(1);
    const tablePageChange = (event, value) => {
        setPage(value);
    };

    const PoolChange = (event) => {
        setPoolChart(event.target.value);
    };
    return (
        <Box sx={{ background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
            <Container sx={{ p: "102px 0 250px" }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="1"
                    name="radio-buttons-group"
                >
                    <Grid container>
                        <Grid xs={12} sm={4} sx={{ padding: "4px" }}>
                            <DashPaper1>
                                <FormControlLabel value="1" control={<Radio />} label="Transactions / 24H" />
                                <Typography sx={{ padding: "26px 39px" }}>179</Typography>
                            </DashPaper1>
                        </Grid>
                        <Grid xs={12} sm={4} sx={{ padding: "4px" }}>
                            <DashPaper1>
                                <FormControlLabel value="2" control={<Radio />} label="Total Volume" />
                                <Typography sx={{ padding: "26px 39px" }}>179</Typography>
                            </DashPaper1>
                        </Grid>
                        <Grid xs={12} sm={4} sx={{ padding: "4px" }}>
                            <DashPaper1>
                                <FormControlLabel value="3" control={<Radio />} label="LambSwap Price" />
                                <Typography sx={{ padding: "26px 39px" }}>179</Typography>
                            </DashPaper1>
                        </Grid>
                    </Grid>
                </RadioGroup>
                <Grid container sx={{ p: "34px 0" }}>
                    <Grid xs={12} md={6} sx={{ p: "4px" }}>
                        <DashPaper2 sx={{ p: "24px" }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Stack>
                                    <Typography sx={{ color: "#7E8B74" }}>Liquidity</Typography>
                                    <Typography sx={{ color: "#34F14B", fontSize: "36px", fontWeight: "bold", fontFamily: "Spline Sans" }}>$ 74.64 M</Typography>
                                    <Typography>2022-02-03</Typography>
                                </Stack>
                                <Stack>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={poolChart}
                                        onChange={PoolChange}
                                        sx={{ width: "150px", textAlign: "center" }}
                                    >
                                        <DashMenuItem sx={{ color: "#7E8B74" }} value={1}>ALL</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={2}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={3}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={4}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={5}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={6}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={7}>ETH-Pool</DashMenuItem>
                                        <DashMenuItem sx={{ color: "#FFFF00" }} value={8}>ETH-Pool</DashMenuItem>
                                    </Select>
                                </Stack>
                            </Stack>
                        </DashPaper2>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ p: "4px" }}>
                        <DashPaper2 sx={{ p: "24px" }}>
                            <Stack>
                                <Typography sx={{ color: "#7E8B74" }}>Liquidity</Typography>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Typography sx={{ color: "#34F14B", fontSize: "36px", fontWeight: "bold", fontFamily: "Spline Sans" }}>$&nbsp;431,954.97</Typography>
                                    <Chip size='small' label={`${103.34}$`} sx={{ color: "white", background: "#37AF43", borderRadius: "6px" }} />
                                </Stack>
                                <Typography>2022-02-03</Typography>
                            </Stack>
                        </DashPaper2>
                    </Grid>
                </Grid>
                <Grid>
                    <TableTypography sx={{ pl: "10px" }}>LIQUIDITY</TableTypography>
                    <Stack sx={{ p: "0 3%" }}>
                        <TableContainer component={Paper} sx={{ background: "transparent" }}>
                            <Table aria-label="simple table" sx={{ mt: "56px" }}>
                                <TableHead>
                                    <TableRow sx={{ '&:first-child th, &:first-child td': { border: 0 } }}>
                                        <TableCell sx={{ p: "4px 30px 4px 0px", fontSize: "18px", color: "#7E8B74" }}>Token&nbsp;Name</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Pool</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Chain</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>24H&nbsp;Vol</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>TVL</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {liquiditys.map((data, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child th, &:last-child td': { border: 0 } }}
                                        >
                                            <TableCell sx={{ p: "24px 30px 24px 0" }}>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    <Typography component='img' src={LPs[1].logo} />
                                                    <TableTypography>{LPs[1].name}</TableTypography>
                                                </Stack>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>LTH-Pool</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>ETH</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>$&nbsp;0</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>$&nbsp;70,102.12</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 0 24px 30px" }} align="right">
                                                <DashButton variant='contained'>add&nbsp;liquidity</DashButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Grid>
                <Grid sx={{ pt: "76px" }}>
                    <TableTypography sx={{ pl: "10px" }}>VAULT</TableTypography>
                    <Stack sx={{ m: "0 3%" }}>
                        <TableContainer component={Paper} sx={{ background: "transparent" }}>
                            <Table aria-label="simple table" sx={{ mt: "56px" }}>
                                <TableHead>
                                    <TableRow sx={{ '&:first-child th, &:first-child td': { border: 0 } }}>
                                        <TableCell sx={{ p: "4px 30px 4px 0px", fontSize: "18px", color: "#7E8B74" }}>Token&nbsp;Name</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Minting&nbsp;Pool</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Total&nbsp;Stake</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>APR</TableCell>
                                        <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {vaults.map((data, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child th, &:last-child td': { border: 0 } }}
                                        >
                                            <TableCell sx={{ p: "24px 30px 24px 0" }}>
                                                <TableTypography>USDT</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>LTH-Pool</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>ETH</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 30px" }}>
                                                <TableTypography>$&nbsp;0</TableTypography>
                                            </TableCell>
                                            <TableCell sx={{ p: "24px 0 24px 30px" }} align="right">
                                                <DashButton variant='contained'>skake</DashButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Grid>
                <Grid sx={{ pt: "76px" }}>
                    <TableTypography sx={{ pl: "10px" }}>TRANSACTION</TableTypography>
                    <Grid container sx={{ p: "0 3%" }} justifyContent="space-between">
                        <Grid xs={9} md={10}>
                            <TableContainer component={Paper} sx={{ background: "transparent" }}>
                                <Table aria-label="simple table" sx={{ mt: "56px" }}>
                                    <TableHead>
                                        <TableRow sx={{ '&:first-child th, &:first-child td': { border: 0 } }}>
                                            <TableCell sx={{ p: "4px 30px 4px 0px", fontSize: "18px", color: "#7E8B74" }}>Trading&nbsp;Route</TableCell>
                                            <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Amount</TableCell>
                                            <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Chain&nbsp;Route</TableCell>
                                            <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Value</TableCell>
                                            <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Account</TableCell>
                                            <TableCell sx={{ p: "4px 30px", fontSize: "18px", color: "#7E8B74" }}>Action</TableCell>
                                            <TableCell sx={{ p: "4px 0px 4px 30px", fontSize: "18px", color: "#7E8B74" }}>Time</TableCell>
                                            {/* <TableCell sx={{ p: "56px 30px 4px", fontSize: "18px", color: "#7E8B74" }}></TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {transactions.slice(page * 9 - 9, page * 9 - 1).map((data, index) => (
                                            <TableRow
                                                key={index}
                                                sx={{ '&:last-child th, &:last-child td': { border: 0 } }}
                                            >
                                                <TableCell sx={{ p: "32px 30px 32px 0" }}>
                                                    <TableTypography>USDT&nbsp;for&nbsp;USDT</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 30px" }}>
                                                    <TableTypography>4,482.7327</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 30px" }}>
                                                    <TableTypography>BSC&nbsp;to&nbsp;ETH</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 30px" }}>
                                                    <TableTypography>$&nbsp;{4482 + index * page}</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 30px" }}>
                                                    <TableTypography>0x7ACd...F965EA</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 30px" }}>
                                                    <TableTypography>Swap</TableTypography>
                                                </TableCell>
                                                <TableCell sx={{ p: "32px 0 32px 30px" }}>
                                                    <TableTypography>5&nbsp;minutes&nbsp;ago</TableTypography>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid xs={2.7} md={1.7} sx={{ pt: "91px" }}>
                            {transactions.slice(page * 9 - 9, page * 9 - 1).map((data, index) => (
                                <Stack key={index} sx={{ p: "27.5px 0" }}>
                                    <DashButton variant='contained'>stake</DashButton>
                                </Stack>
                            ))}
                        </Grid>
                    </Grid>
                    <Stack sx={{ p: "30px 3%" }} direction="row" justifyContent="flex-end">
                        <Pagination count={Math.ceil(transactions.length / 9)} page={page} siblingCount={matches425 ? 1 : 0} onChange={tablePageChange} />
                    </Stack>
                </Grid>
            </Container>
        </Box>
    );
}