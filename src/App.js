import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Box,
  Stack,
  AppBar,
  Tabs,
  Tab,
  Link,
  Paper,
  Button,
  IconButton,
  Container,
  Menu,
  MenuItem,
  useMediaQuery
} from '@mui/material';
import { styled, createTheme } from '@mui/material/styles';
import Home from './pages/Home/home';
import Swap from './pages/Swap/swap';
import Hub from './pages/Hub/hub';
import Staked from './pages/Vault/staked';
import Dashboard from './pages/Dashboard/dashboard';
import Governance from './pages/DAO/Governance/governance';
import Launchpad from './pages/DAO/Launchpad/launchpad';
import RefferalProgram from './pages/DAO/Refferal-Program/refferal';
import { IOSSwitch } from './config/style';

import { ThemeProvider } from '@emotion/react';
import Frame96 from './assets/img/common/Frame96.png';
// import Medium from './assets/img/tab-icon/medium.png';
// import GitHub from './assets/img/tab-icon/github.png';
// import Reddit from './assets/img/tab-icon/reddit.png';
// import Telegram from './assets/img/tab-icon/telegram.png';
// import Twitter from './assets/img/tab-icon/twitter.png';
// import Lambswap1 from './assets/img/tab-icon/Lambswap1.png';
// import Lamb2 from './assets/img/tab-icon/Lamb-2.png';
import homeIcon from './assets/img/tab-icon/Frame 365-1.png';
import homeIcon1 from './assets/img/tab-icon/Frame 365.png';
import swapIcon from './assets/img/tab-icon/Frame 366.png';
import swapIcon1 from './assets/img/tab-icon/Frame 366-1.png';
import hubIcon from './assets/img/tab-icon/Frame 367.png';
import hubIcon1 from './assets/img/tab-icon/Frame 367-1.png';
import dashIcon from './assets/img/tab-icon/Frame 369.png';
import daoIcon from './assets/img/tab-icon/Frame 370.png';
import stakedIcon from './assets/img/tab-icon/Frame 368.png';
import stakedIcon1 from './assets/img/tab-icon/Frame 368-1.png';
import launchpadIcon from './assets/img/tab-icon/368-5.png';
import governanceIcon from './assets/img/tab-icon/Frame 369-5.png';
import refferalIcon from './assets/img/tab-icon/Frame 371.png';
import poolsIcon from './assets/img/tab-icon/Frame 369-1.png';
import vaultIcon from './assets/img/tab-icon/Frame 370-1.png';

import SettingsIcon from '@mui/icons-material/Settings';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import ListIcon from '@mui/icons-material/List';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import MenuIcon from '@mui/icons-material/Menu';
import LinkIcon from '@mui/icons-material/Link';

import { useWeb3React } from "@web3-react/core";
import Cwallet from "./assets/constants/Cwallet";
import { Chains, Wallets } from "./assets/constants/wallets";
import Language from './assets/constants/language';
import { get_tokens } from "./services/tokens/tokens.service";

import './App.css';



const theme = createTheme({
  palette: {
    primary: {
      main: "#34F14B",
    },
    secondary: {
      main: '#34F14B',
    },
  },
});

const SettingPaper = styled(Paper)(() => ({
  background: "linear-gradient(279.93deg, #262626 0%, rgba(54, 51, 51, 0.14) 100%)",
  margin: "6px 9px",
  width: "198px",
  borderRadius: "15px !important",
  padding: "10px 15px",
  cursor: "pointer"
}));

const AppTab = styled(Tab)(() => ({
  padding: "32px 0px 26px",
  margin: "0 15px",
}));

const HomeTypography2 = styled(Typography)(() => ({
  padding: "10px",
  textAlign: "center",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  if (index > 5) {
    index = 5;
  }
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const matches600 = useMediaQuery('(min-width:600px)');
  const matches700 = useMediaQuery('(min-width:700px)');

  const [value, setValue] = useState(0);
  const [netIconState, setNetIconState] = useState(0);
  const [chainMenuState, setChainMenuState] = useState(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [walletState, setWalletState] = useState(Wallets[0]);
  const { active, account, chainId } = useWeb3React();
  const [DAOMenuState, setDAOMenuState] = useState(null);
  const [menuPage, setMenuPage] = useState(0);
  const [menuPage_1, setMenuPage_1] = useState(0);
  const [settingMenuState, setSettingMenuState] = useState(null);
  const [hubTabValue, setHubTabValue] = useState(2);
  const [stakedMenuState, setStakedMenuState] = useState(null);
  const [navMenuState, setNavMenuState] = useState(null);
  const [chainState, setChainState] = useState(Chains[0]);

  // const connected = Connected();
  useEffect(async () => {
    let chain_data = await Chains.find((data) => (data.chainId === chainId));
    chainMenuClose(chain_data);
  }, [chainId]);

  const settingMenuOpen = (event) => {
    setSettingMenuState(event.currentTarget);
  };

  const settingMenuClose = () => {
    setSettingMenuState(null);
  };

  const DAOMenuOpen = (event) => {
    setDAOMenuState(event.currentTarget);
  };

  const stakedMenuOpen = (event) => {
    setStakedMenuState(event.currentTarget);
  };

  const DAOMenuClose = (newValue) => {
    setDAOMenuState(null);
    setNavMenuState(null);
    if (newValue === 0) {
      setValue(value);
    } else {
      setValue(5);
    }
    if (newValue > 0) {
      setMenuPage(newValue)
    }
  };

  const stakedMenuClose = (newValue) => {
    setStakedMenuState(null);
    setNavMenuState(null);
    if (newValue === 0) {
      setValue(value);
    } else {
      setValue(3);
    }
    if (newValue > 0) {
      setMenuPage_1(newValue);
    }
  };


  const handleChange = (event, newValue) => {
    if (newValue !== 5 && newValue !== 3) {
      setValue(newValue);
    }
  };

  const chainMenuOpen = (event, state) => {
    setChainMenuState(event.currentTarget);
    setNetIconState(state);
  };

  const chainMenuClose = async (data) => {
    setChainMenuState(null);
    setNetIconState(0);
    if (data) {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(data.chainId).toString(16)}` }], // chainId must be in hexadecimal numbers
      }).then(() => {
        get_tokens(data.chainId).then(dt => {
          data.tokens = dt;
          setChainState(data);
        });
      });
    }
  };

  return (
    <Box>
      <Grid sx={{ background: "#191919", color: "white", overflow: "hidden" }}>
        <AppBar position="fixed" sx={{ top: 'auto', bottom: "0px", background: "#191919", overflow: "hidden", px: "20px" }}>
          {/* <Container> */}
          {matches700 ?
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
              <ThemeProvider theme={theme}>
                <Tabs
                  value={value}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  aria-label="LambSwap tab"
                >
                  <AppTab icon={<Typography component="img" src={value === 0 ? homeIcon1 : homeIcon} />} {...a11yProps(0)} />
                  <AppTab icon={<Typography component="img" src={value === 1 ? swapIcon1 : swapIcon} />} {...a11yProps(1)} />
                  <AppTab onClick={() => setHubTabValue(2)} icon={<Typography component="img" src={value === 2 ? hubIcon1 : hubIcon} />} />
                  <AppTab onClick={stakedMenuOpen} icon={<Typography component="img" src={value === 3 ? stakedIcon1 : stakedIcon} />} />
                  <AppTab icon={<Typography component="img" src={dashIcon} />} {...a11yProps(4)} />
                  <AppTab onClick={DAOMenuOpen} icon={<Typography component="img" src={daoIcon} />} {...a11yProps(5)} />
                </Tabs>
              </ThemeProvider>
              {/* {active && (() => {
                setChainState(connected.activeChain);
                setWalletState(connected.activating);
              })
              } */}
              <Stack direction="row" spacing={2}>
                <Button sx={{ color: "white", borderRadius: "30px", background: "linear-gradient(93.42deg, rgba(211, 255, 33, 0.51) 0%, rgba(211, 255, 33, 0.1581) 100%)", p: "10px" }} onClick={(e) => chainMenuOpen(e, netIconState === 0 ? 1 : 0)}><Typography component="img" src={chainState.logo1} />&nbsp;<Typography sx={{ whiteSpace: "nowrap" }}>{chainState.name}</Typography>&nbsp;{netIconState === 0 ? <ExpandLessIcon /> : <ExpandMoreIcon />} </Button>
                {active ?
                  <Button onClick={() => setIsOpenDialog(true)} sx={{ color: "white", borderRadius: "14px", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)", p: "10px" }} startIcon={<Typography component="img" src={walletState.logo2} sx={{ width: "24px", height: "24px" }} />}>&nbsp;{account.substring(0, 6)}...{account.substring(account.length - 4)}</Button>
                  :
                  <Button onClick={() => setIsOpenDialog(true)} sx={{ color: "white", borderRadius: "14px", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)" }}>connect&nbsp;wallet</Button>
                }
                <IconButton onClick={settingMenuOpen}><SettingsIcon /></IconButton>
              </Stack>
            </Stack>
            :
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ height: "70px" }}>
              <IconButton onClick={(e) => setNavMenuState(e.currentTarget)}><MenuIcon /></IconButton>
              <Stack direction="row" spacing={2}>
                <Button sx={{ color: "white", borderRadius: "30px", background: "linear-gradient(93.42deg, rgba(211, 255, 33, 0.51) 0%, rgba(211, 255, 33, 0.1581) 100%)", p: "10px" }} onClick={(e) => chainMenuOpen(e, netIconState === 0 ? 1 : 0)}><Typography component="img" src={chainState.logo1} />&nbsp;{netIconState === 0 ? <ExpandLessIcon /> : <ExpandMoreIcon />} </Button>
                {active ?
                  <Button onClick={() => setIsOpenDialog(true)} sx={{ color: "white", borderRadius: "14px", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)", p: "10px" }}><Typography component="img" src={walletState.logo2} sx={{ width: "24px", height: "24px" }} /></Button>
                  :
                  <Button onClick={() => setIsOpenDialog(true)} sx={{ color: "white", borderRadius: "14px", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)" }}><LinkIcon sx={{ fontSize: "32px" }} /></Button>
                }
                <IconButton onClick={settingMenuOpen}><SettingsIcon /></IconButton>
              </Stack>
            </Stack>
          }
          {/* </Container> */}
        </AppBar>
        <Menu
          sx={{ mt: '-52px', borderRadius: "30px" }}
          id="menu-appbar"
          anchorEl={chainMenuState}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(chainMenuState)}
          onClose={() => chainMenuClose(false)}
        >
          {Chains.map((data, index) => (
            <MenuItem key={index} onClick={() => chainMenuClose(data)}>
              <Stack direction="row" sx={{ padding: "4px" }}>
                <Typography component="img" src={data.logo1}></Typography>&nbsp;&nbsp;
                <Typography>{data.name}</Typography>
              </Stack>
            </MenuItem>
          ))}
        </Menu>
        <TabPanel value={value} index={0}>
          <Home value={setValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Swap chainState={chainState} setChainState={setChainState} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Hub chainState={chainState} tabValue={hubTabValue} setTabValue={setHubTabValue} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Staked chainState={chainState} menuPage={menuPage_1} setChainState={setChainState} setIsOpenDialog={setIsOpenDialog} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={5}>
          {menuPage === 1 &&
            <Governance chainState={chainState} />
          }
          {menuPage === 2 &&
            <Launchpad />
          }
          {menuPage === 3 &&
            <RefferalProgram />
          }
        </TabPanel>
      </Grid>
      <Grid sx={{ background: "#191919", pb: `${matches700 ? 92 : 70}px` }}>
        {/* {value == 1 ?
          <Grid container sx={{ background: "rgba(52, 241, 75, 0.02)", color: "white" }}>
            <Grid xs={12} md={6} sx={{ padding: "43px 3.3%" }} direction="column">
              <Typography variant='h5'>Receive our Newsletter</Typography>
              <Paper component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 400, background: "rgba(13, 116, 245, 0.05)", margin: "32px 0" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, color: "white" }}
                  placeholder="Please fill in your email address"
                  inputProps={{ 'aria-label': 'please fill in your email address' }}
                />
                <Button type="submit" sx={{ margin: '3px', borderRadius: "9px", fontWeight: "bold", color: "white", background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)" }} aria-label="search">Subscribe</Button>
              </Paper>
              <Stack direction="row" spacing={3} sx={{ padding: "50px 0 21px" }}>
                <IconButton sx={{ color: "#12F3D8" }}>
                  <Typography component="img" src={GitHub}></Typography>
                </IconButton>
                <IconButton sx={{ color: "#12F3D8" }}>
                  <Typography component="img" src={Twitter}></Typography>
                </IconButton>
                <IconButton sx={{ color: "#12F3D8" }}>
                  <Typography component="img" src={Telegram}></Typography>
                </IconButton>
                <IconButton sx={{ color: "#12F3D8" }}>
                  <Typography component="img" src={Medium}></Typography>
                </IconButton>
                <IconButton sx={{ color: "#12F3D8" }}>
                  <Typography component="img" src={Reddit}></Typography>
                </IconButton>
              </Stack>
              <Typography component="img" src={Lambswap1}></Typography>
            </Grid>
            <Grid xs={12} md={6} container direction="column" alignItems="center" justifyContent="flex-end">
              <Typography component="img" src={Lamb2} sx={{maxWidth:"100%"}}></Typography>
            </Grid>
          </Grid>
          : */}
        <Grid sx={{ padding: "18px 58px", color: "white", background: "rgba(52, 241, 75, 0.02)" }}>
          <Container>
            <Grid container>
              <Grid xs={12} md={3} container direction="column" alignItems="center" sx={{ padding: "15px" }}>
                <HomeTypography2 component="img" src={Frame96} sx={{ maxWidth: "100%" }}></HomeTypography2>
              </Grid>
              <Grid container xs={12} md={9}>
                <Grid xs={12} sm={6} md={3} container direction="column" alignItems="center" sx={{ padding: "15px" }}>
                  <HomeTypography2 variant='h5' gutterBottom align='center'>Receive our Newsletter</HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Liquidity Protocol</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Aggregation Protocol</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Limit Order Protocol</Link></HomeTypography2>
                </Grid>
                <Grid xs={12} sm={6} md={3} container direction="column" alignItems="center" sx={{ padding: "15px" }}>
                  <HomeTypography2 variant='h5' gutterBottom>Governance</HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">1inch DAO</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">1INCH token</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Forum</Link></HomeTypography2>
                </Grid>
                <Grid xs={12} sm={6} md={3} container direction="column" alignItems="center" sx={{ padding: "15px" }}>
                  <HomeTypography2 variant='h5' gutterBottom>Support</HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Help center</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Press room</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Terms of service</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Privacy policy</Link></HomeTypography2>
                </Grid>
                <Grid xs={12} sm={6} md={3} container direction="column" alignItems="center" sx={{ padding: "15px" }}>
                  <HomeTypography2 variant='h5' gutterBottom>Developers</HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Documentation</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">GitHub</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Audit</Link></HomeTypography2>
                  <HomeTypography2><Link href="#" className='footer_link' underline="none">Bug bounty</Link></HomeTypography2>
                </Grid>
              </Grid>
            </Grid>
            <Typography component="div" sx={{ width: "100%", margin: "33px 0", height: 0, border: "1px solid #B1BAB2" }}></Typography>
            <Stack direction={matches600 ? "row" : "column"} alignItems={matches600 ? "flex-start" : "center"} justifyContent="space-between" spacing={2}>
              <Typography>© 2021 1inch, All Rights Reserved.</Typography>
              <Typography>BUIDL @ETHNewYork 2019</Typography>
            </Stack>
          </Container>
        </Grid>
      </Grid>

      <Menu
        id="basic-menu"
        anchorEl={settingMenuState}
        open={Boolean(settingMenuState)}
        onClose={settingMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ mt: "-52px", ml: "-1.2%" }}
        className="set_m"
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: "15px 30px 0 " }}>
          <Typography sx={{ fontSize: "24px" }}>Global Setting</Typography>
          <IconButton onClick={settingMenuClose}><CloseIcon /></IconButton>
        </Stack>
        <Stack sx={{ padding: "15px 20px" }}>
          <Stack direction="row">
            <SettingPaper className="settingPaper">
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: "12px" }}>
                <Typography component="img" sx={{ width: "35px", height: "24px" }} src={Language[0].logo} />
                <ChevronRightIcon />
              </Stack>
              <Stack sx={{ mt: "30px" }}>
                <Typography>{Language[0].name}</Typography>
                <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Choose language</Typography>
              </Stack>
            </SettingPaper>
            <SettingPaper className="settingPaper">
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: "12px" }}>
                <SpaceBarIcon />
                <ChevronRightIcon />
              </Stack>
              <Stack sx={{ mt: "29px" }}>
                <Typography>Space (1 000)</Typography>
                <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Thousand separator</Typography>
              </Stack>
            </SettingPaper>
          </Stack>
          <Stack direction="row">
            <SettingPaper>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <ListIcon />
                <IOSSwitch sx={{ m: 1 }} />
              </Stack>
              <Stack sx={{ mt: "25px" }}>
                <Typography>Show Table</Typography>
                <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Rate comparison table</Typography>
              </Stack>
            </SettingPaper>
            <SettingPaper>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <NorthEastIcon />
                <IOSSwitch sx={{ m: 1 }} />
              </Stack>
              <Stack sx={{ mt: "25px" }}>
                <Typography>Show Routing</Typography>
                <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Rate available rates</Typography>
              </Stack>
            </SettingPaper>
          </Stack>
        </Stack>
      </Menu>

      <Menu
        id="basic-menu"
        anchorEl={DAOMenuState}
        open={Boolean(DAOMenuState)}
        onClose={() => DAOMenuClose(0)}
        sx={{ mt: `${matches700 ? "-75px" : "-52px"}`, ml: `${matches700 ? "none" : "168px"}` }}
      >
        <MenuItem onClick={() => DAOMenuClose(1)}>
          <Stack direction="row" sx={{ padding: "10px 20px" }}>
            <Typography component="img" src={governanceIcon} />
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => DAOMenuClose(2)}>
          <Stack direction="row" sx={{ padding: "10px 20px" }}>
            <Typography component="img" src={launchpadIcon} />
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => DAOMenuClose(3)}>
          <Stack direction="row" sx={{ padding: "10px 20px" }}>
            <Typography component="img" src={refferalIcon} />
          </Stack>
        </MenuItem>
      </Menu>

      <Menu
        id="basic-menu1"
        anchorEl={stakedMenuState}
        open={Boolean(stakedMenuState)}
        onClose={() => stakedMenuClose(0)}
        sx={{ mt: `${matches700 ? "-75px" : "-52px"}`, ml: `${matches700 ? "none" : "168px"}` }}
      >
        <MenuItem onClick={() => stakedMenuClose(1)}>
          <Stack direction="row" sx={{ padding: "10px 20px" }}>
            <Typography component="img" src={poolsIcon} />
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => stakedMenuClose(2)}>
          <Stack direction="row" sx={{ padding: "10px 20px" }}>
            <Typography component="img" src={vaultIcon} />
          </Stack>
        </MenuItem>
      </Menu>

      <Menu
        id="basic-menu2"
        anchorEl={navMenuState}
        open={Boolean(navMenuState)}
        onClose={() => setNavMenuState(null)}
        sx={{ mt: "-52px" }}
      >
        <MenuItem onClick={() => setValue(0, setNavMenuState(null))}><Typography sx={{ mt: "8px" }} component="img" src={homeIcon} /></MenuItem>
        <MenuItem onClick={() => setValue(1, setNavMenuState(null))}><Typography sx={{ mt: "8px" }} component="img" src={swapIcon} /></MenuItem>
        <MenuItem onClick={() => setValue(2, setNavMenuState(null))}><Typography sx={{ mt: "8px" }} component="img" src={hubIcon} /></MenuItem>
        <MenuItem onClick={(e) => setStakedMenuState(e.currentTarget)}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "6px", width: "100%" }}>
            <Typography sx={{ fontSize: "20px" }}>Staked</Typography>
            <ChevronRightIcon />
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => setValue(4, setNavMenuState(null))}><Typography sx={{ mt: "8px" }} component="img" src={dashIcon} /></MenuItem>
        <MenuItem onClick={(e) => setDAOMenuState(e.currentTarget)}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "6px", width: "100%" }}>
            <Typography sx={{ fontSize: "20px" }}>DAO</Typography>
            <ChevronRightIcon />
          </Stack>
        </MenuItem>
      </Menu>
      <Cwallet isOpenDialog={isOpenDialog} setIsOpenDialog={setIsOpenDialog} chain={chainState} setChain={setChainState} />
    </Box >
  );
}

export default App;