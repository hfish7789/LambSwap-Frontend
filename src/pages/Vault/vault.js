import * as React from 'react';
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
    TableContainer
} from '@mui/material';

import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CalculateIcon from '@mui/icons-material/Calculate';

import Icon2 from '../../assets/img/common/Icon2.png';

const VaultButton = styled(Button)(() => ({
    borderRadius: "12px"
}));
const VaultPaper = styled(Paper)(() => ({
    borderRadius: "24px",
    background: "#232121"
}));

export default function vault() {
    const [vaults, setVaults] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [unlockState, setUnlockState] = React.useState(0);

    const moreInfo = () => {
        console.info('You clicked the Chip.');
    }

    return (
        <Box>
            <Grid sx={{ m: "26px 0 10px" }}>
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
                                    <Typography>BEEF-BNB</Typography>
                                </Grid>
                                <Grid xs={2.1} direction="column">
                                    <Typography sx={{ padding: "18px 0" }}>Staked</Typography>
                                    <Typography>--</Typography>
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
                                    <Typography>--</Typography>
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
                                        <VaultButton variant='outlined' sx={{ width: "115px" }}>get lp</VaultButton>
                                    </Grid>
                                    <Grid lg={3} xs={6}>
                                        <VaultButton variant='outlined' color="inherit" sx={{ mr: "10px", width: "115px" }}>stake</VaultButton>
                                        <VaultButton variant='outlined' color="inherit" sx={{ width: "115px" }}>unstake</VaultButton>
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
                                        <Typography component="img" src={Icon2} sx={{ width: "46px", height: "46px" }} />
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
                                <Typography component="img" src={LPs[0].logo} />&nbsp;&nbsp;<Typography>LambSwap</Typography>
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
                            <Stack alignItems="flex-start"><Typography component="img" src={LPs[0].logo} /></Stack>
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
                    {staking.map((data, index) => (
                        <Grid xs={12} lg={4} key={index} sx={{ padding: "4px" }}>
                            <VaultPaper sx={{ padding: "20px 28px" }}>
                                <Stack direction="row" spacing={1}>
                                    <Stack alignItems="flex-start"><Typography component="img" src={LPs[0].logo} /></Stack>
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
        </Box>
    );
}