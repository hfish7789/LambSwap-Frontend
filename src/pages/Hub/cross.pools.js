import * as React from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    Input,
    useMediaQuery,
    Divider,
    Avatar,
    Chip
} from '@mui/material';

import { CustomTab } from '../../config/style';

import { styled } from '@mui/material/styles';
import { CrossPoolColor } from "../../assets/constants/wallets";
// import { ThemeProvider } from '@emotion/react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// import Crypto9 from '../../assets/img/common/crypto-9.png';
// import Weth2 from '../../assets/img/common/weth2.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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

export default function CrossPools({ tabValue, setTabValue, crossData }) {
    const matches600 = useMediaQuery('(min-width:600px)');
    const matches900 = useMediaQuery('(min-width:900px)');

    const [detailValue, setDetailValue] = React.useState();
    const [iconState, setIconState] = React.useState(0);

    React.useEffect(() => {
        setTabValue(tabValue);
    }, [tabValue])

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

    return (
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
                        {crossData.token_pair.map((data, index) => (
                            <HubPaper sx={{ p: "25px 34px", overflow: "auto" }} key={index}>
                                <Grid container justifyContent="space-between" sx={{ minWidth: "580px" }}>
                                    <Grid xs={5.5}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Stack direction="column" alignItems="center">
                                                    <Avatar src={data.logoURI} sx={{ width: "35px", height: "35px" }} />
                                                    <Chip size='small' className="group-mark" label={CrossPoolColor[data.chainId].group_name} sx={{ background: `${CrossPoolColor[data.chainId].bg}` }} />
                                                </Stack>
                                                <Typography sx={{ color: "white" }}>{data.symbol}</Typography>
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
                        {crossData.token_pair.map((data, index) => (
                            <HubPaper sx={{ p: "25px 34px", overflow: "auto" }} key={index}>
                                <Grid container justifyContent="space-between" alignItems="center" sx={{ minWidth: "580px" }}>
                                    <Grid xs={5.5}>
                                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Stack direction="column" alignItems="center">
                                                    <Avatar src={data.logoURI} sx={{ width: "35px", height: "35px" }} />
                                                    <Chip size='small' className="group-mark" label={CrossPoolColor[data.chainId].group_name} sx={{ background: `${CrossPoolColor[data.chainId].bg}` }} />
                                                </Stack>
                                                <Typography sx={{ color: "white" }}>{data.symbol}</Typography>
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
            <Paper sx={{ borderRadius: "14px", background: "#232121", overflow: "hidden" }}>
                <Grid container>
                    <Grid xs={12} sm={7}>
                        <Stack direction="column" sx={{ p: `0 ${matches900 ? `90px` : `5%`} 32px` }}>
                            <Stack direction="row" sx={{ pt: "35px", pb: "5px" }}>
                                <Typography sx={{ color: "#7E8B74" }}>
                                    {crossData.token_pair.map((data, index) => {
                                        if (index + 1 === crossData.token_pair.length) {
                                            return (`${data.symbol} + `).slice(0, -2);
                                        } else {
                                            return `${data.symbol} + `;
                                        }
                                    })}:&nbsp;
                                </Typography>
                                <Typography sx={{ color: "white" }}>7,819,16</Typography>
                            </Stack>
                            {crossData.token_pair.map((data, index) => (
                                <Stack direction="row" sx={{ py: "10px" }} key={index} spacing={1}>
                                    <Stack direction="column" alignItems="center">
                                        <Avatar src={data.logoURI} sx={{ width: "35px", height: "35px" }} />
                                        <Chip size='small' className="group-mark" label={CrossPoolColor[data.chainId].group_name} sx={{ background: `${CrossPoolColor[data.chainId].bg}` }} />
                                    </Stack>
                                    <Stack direction="column" sx={{ width: "100%" }}>
                                        <Stack direction="row">
                                            <Typography variant='p' sx={{ color: "#7E8B74" }}>{data.symbol}:</Typography>
                                            <Typography variant='p' sx={{ color: "white" }}>&nbsp;2,851.18&nbsp;</Typography>
                                            <Typography variant='p' sx={{ color: "#7E8B74" }}>({36.464}%)</Typography>
                                        </Stack>
                                        <BorderLinearProgress variant="determinate" value={36.464} sx={{ maxWidth: "300px", width: "100%" }} />
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
                        <Typography component="img" src={crossData.logo1} sx={{ maxWidth: "100%" }}></Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}