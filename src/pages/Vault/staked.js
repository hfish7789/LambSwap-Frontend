import * as React from 'react';
import {
    Grid,
    Stack,
    Typography,
    Box,
    Button,
    Paper,
    Menu,
    MenuItem,
    Container,
    useMediaQuery
} from '@mui/material';

import { Chains } from "../../assets/constants/wallets";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Pools from './pools';
import Vault from './vault';

const VaultPaper = styled(Paper)(() => ({
    background: "#232121",
    border: "1px solid",
    borderColor: "radial-gradient(100% 100% at 0% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"
}));

export default function Staked({ chainState, menuPage, setChainState, setIsOpenDialog }) {

    const matches400 = useMediaQuery('(min-width:400px)');

    const [vaultChainMenuState, setVaultChainMenuState] = React.useState(null);

    const vaultChainMenuOpen = (event) => {
        setVaultChainMenuState(event.currentTarget);
    }

    const vaultChainMenuClose = async (event, data, status) => {
        setVaultChainMenuState(null);
        if (data && data !== "backdropClick") {
            if (data) {
                // if (active) {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${Number(status === 1 ? data.chainId : data.test_chainId).toString(16)}` }], // chainId must be in hexadecimal numbers
                }).then(() => {
                    setChainState(data)
                });
                // } else {
                //   setChainState(data)
                // }
            }
        }
    }

    return (
        <Box sx={{ padding: "105px 0 330px", background: "linear-gradient(45deg, rgba(12,38,16,1) 0%, rgba(6,23,11,0.9948354341736695) 20%, rgba(17,38,21,1) 64%, rgba(0,0,0,1) 100%)" }}>
            <Container>
                <Grid container>
                    <Grid xs={matches400 ? 6 : 12} sm={4} md={2.6} sx={{ p: "4px" }}>
                        <Stack direction="column" spacing={1}>
                            <Button sx={{ width: "100%", borderRadius: "33px", p: "20px 1%", color: "white", background: "linear-gradient(93.42deg, rgba(211, 255, 33, 0.51) 0%, rgba(211, 255, 33, 0.1581) 100%)" }} startIcon={<Typography component='img' src={chainState.logo1} />} endIcon={<ExpandMoreIcon />} onClick={vaultChainMenuOpen}>{chainState.name}</Button>
                            <VaultPaper sx={{ padding: "16px 18px" }}>
                                <Stack direction="column">
                                    <Typography sx={{ color: "#7E8B74", mb: "20px" }}>Name</Typography>
                                    <Typography sx={{ color: "#7E8B74" }}>LST&nbsp;-&nbsp;LPs</Typography>
                                </Stack>
                            </VaultPaper>
                        </Stack>
                    </Grid>
                    <Grid xs={matches400 ? 6 : 12} sm={4} md={4.7} sx={{ p: "4px" }}>
                        <VaultPaper sx={{ padding: "48px 28px 65px" }}>
                            <Stack direction="column" spacing={1.6}>
                                <Typography sx={{ color: "#7E8B74" }}>Total&nbsp;Value&nbsp;Locked</Typography>
                                <Typography>=＄&nbsp;1.000.000.000</Typography>
                            </Stack>
                        </VaultPaper>
                    </Grid>
                    <Grid xs={12} sm={4} md={4.7} sx={{ p: "4px" }}>
                        <VaultPaper sx={{ padding: "48px 28px 65px" }}>
                            <Stack direction="column" spacing={1.6}>
                                <Typography sx={{ color: "#7E8B74" }}>Pairs&nbsp;Info</Typography>
                                <Typography>35</Typography>
                            </Stack>
                        </VaultPaper>
                    </Grid>
                </Grid>

                {menuPage === 1 &&
                    <Pools chain={chainState} setIsOpenDialog={setIsOpenDialog} />
                }

                {menuPage === 2 &&
                    <Vault chain={chainState} />
                }

                <Menu
                    sx={{ mt: '65px' }}
                    id="menu-appbar"
                    anchorEl={vaultChainMenuState}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(vaultChainMenuState)}
                    onClose={vaultChainMenuClose}
                >
                    {menuPage === 1 ?
                        Chains.map((data, index) => (
                            <MenuItem key={index} onClick={(e) => vaultChainMenuClose(e, data, 1)}>
                                <Stack direction="row" sx={{ padding: "4px" }}>
                                    <Typography component="img" src={data.logo1}></Typography>&nbsp;&nbsp;
                                    <Typography>{data.name}</Typography>
                                </Stack>
                            </MenuItem>
                        ))
                        :
                        [Chains[0], Chains[2]].map((data, index) => (
                            <MenuItem key={index} onClick={(e) => vaultChainMenuClose(e, data, 2)}>
                                <Stack direction="row" sx={{ padding: "4px" }}>
                                    <Typography component="img" src={data.logo1}></Typography>&nbsp;&nbsp;
                                    <Typography>{data.name}</Typography>
                                </Stack>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Container>
        </Box>
    );
}