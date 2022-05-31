import React, { useState, useEffect, useRef } from "react";
import useFetch from "./useFetch";
// ** Web3 React
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
    URI_AVAILABLE,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";
import Web3 from 'web3';
// Import Material UI Components
import {
    List,
    Link,
    Tooltip,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    DialogContent,
    CircularProgress,
    ListItemSecondaryAction,
    Typography,
    Avatar,
    Grid,
    Stack,
    FormControlLabel,
    Checkbox,
    Button,
    Badge,
    MenuItem,
    Box,
    Divider,
    Radio,
    Paper,
    RadioGroup,
    Alert,
    InputBase,
    InputAdornment,
    TextField,
    ListItemButton,
    DialogActions,
    Select,
    Slider
} from '@mui/material';

import axios from 'axios';

// Import Assets
import { Wallets, Connected, Chains } from "./wallets";
import { TokenABI } from "../../config/abis/TokenABI";
import { Router_address } from "../../config/abis/router/dexRouter";
import { Factory_address } from "../../config/abis/router/dexFactory";
import { getBalance } from "../../config/app";
// Import Icons
import CloseIcon from "@mui/icons-material/Close";
import ReplayIcon from '@mui/icons-material/Replay';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import LowPriorityRoundedIcon from '@mui/icons-material/LowPriorityRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import DoneIcon from '@mui/icons-material/Done';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';

import { styled } from '@mui/material/styles';
import { walletconnect } from "./connectors";
import { useEagerConnect, useInactiveListener } from "../../config";
import { IOSSwitch, CAccordion, CAccordionDetails, CAccordionSummary, BootstrapDialog, BootstrapDialogTitle } from "../../config/style";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { create_pool, get_pools } from "../../services/pool/liquidity.service";
import { token_import, token_filter } from "../../services/tokens/tokens.service";

import Inch from '../img/common/1inch_color 1.png';

const ConnectButton = styled(Button)(() => ({
    color: "white",
    fontWeight: "700",
    fontSize: "16px",
    borderRadius: "12px",
    background: "linear-gradient(100.22deg, #34F14B 0%, #139F24 100%)"
}));

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 300,
        },
    },
};

const Cwallet = ({ isOpenDialog, setIsOpenDialog, chain, setChain, tokenDialogState, setTokenDialogState, selectToken, swapSettingDialogState, setSwapSettingDialogState, poolCreateDialogState, setPoolCreateDialogState, setPools, setImportAlert }) => {
    const triedEager = useEagerConnect();
    const {
        activate,
        active,
        account,
        deactivate,
        connector,
        error,
        setError,
    } = useWeb3React();
    const [activatingConnector, setActivatingConnector] = useState(false);
    const [isSelectingWallet, setIsSelectingWallet] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [button, setButton] = useState(1);
    const [activeSlipageButton, setActiveSlipageButton] = useState(1);
    const [liquidityDialogState, setLiquidityDialogState] = useState(false);
    const [liquiditySources, setLiquiditySources] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [baseToken, setBaseToken] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
    const [gusMenu, setGusMenu] = useState([
        { min: 44.05, max: 63.91, name: "Instant", time: "< 10 sec" },
        { min: 44.05, max: 63.91, name: "High", time: "~ 12 sec" },
        { min: 44.05, max: 63.91, name: "Medium", time: "~ 30 sec" },
        { min: 44.05, max: 63.91, name: "Low", time: ">= 1 min" },
    ]);
    const [gusState, setGusState] = useState(gusMenu[1]);
    const [maxFee, setMaxFee] = useState(Math.ceil(gusState.max));
    const [errorState, setErrorState] = useState(false);
    const [checked, setChecked] = useState([1]);
    const [customToken, setCustomToken] = useState([]);
    const [tokenImportDialogState, setTokenImportDialogState] = useState(false);
    const [validateText, setValidateText] = useState("");
    const [page, setPage] = useState(1);
    const [importState, setImportState] = useState(true);
    const connected = Connected();
    const listInnerRef = useRef();
    const { list, setList } = useFetch(page, chain.tokens);
    // const [token1, setToken1] = useState(chain.test_tokens[0]);
    // const [token2, setToken2] = useState(chain.test_tokens[1]);
    const [token1, setToken1] = useState(chain.tokens[0]);
    const [token2, setToken2] = useState(chain.tokens[1]);
    const [poolBtnState, setPoolBtnState] = useState(false);
    const [approveBtnState, setApproveBtnState] = useState(false);
    const [routerAddress, setRouterAddress] = useState();
    const [factoryAddress, setFactoryAddress] = useState();
    const [LPAmount, setLPAmount] = useState();
    const [token1Max, setToken1Max] = useState();
    const [token2Max, setToken2Max] = useState();
    const [LPMax, setLPMax] = useState();

    const token1_amount = useRef();
    const token2_amount = useRef();

    const web3 = new Web3(window.ethereum);
    const BN = web3.utils.BN;

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                setPage((prev) => prev + 1);
            }
        }
    };

    useEffect(() => {
        setPage(1);
        setList(chain.tokens.slice(0, 19));
        // setToken1(chain.test_tokens[0]);
        // setToken2(chain.test_tokens[1]);
        setToken1(chain.tokens[0]);
        setToken2(chain.tokens[1]);
        // setRouterAddress(Router_address.find(data => (data.chainId === chain.chainId)).test_dex);
        // setFactoryAddress(Factory_address.find(data => (data.chainId === chain.chainId)).test_dex);
        setRouterAddress(Router_address.find(data => (data.chainId === chain.chainId)).dexs);
        setFactoryAddress(Factory_address.find(data => (data.chainId === chain.chainId)).dexs);
    }, [chain]);

    useEffect(async () => {
        if (poolCreateDialogState) {
            setToken1(poolCreateDialogState.token1);
            setToken2(poolCreateDialogState.token2);
            if (poolCreateDialogState.title === "Remove Liquidity") {
                const FactoryInst = new web3.eth.Contract(factoryAddress.abi, factoryAddress.address);
                const LPAddress = await FactoryInst.methods.getPair(poolCreateDialogState.token1.address, poolCreateDialogState.token2.address).call();
                const LPInst = new web3.eth.Contract(TokenABI, LPAddress);
                let lp_balance_v1 = await LPInst.methods.balanceOf(account).call();
                let lp_decimal = await LPInst.methods.decimals().call();
                let lp_balance_v2 = await getBalance(lp_balance_v1, lp_decimal);
                setLPMax(lp_balance_v2);
            } else {
                const token1Inst = new web3.eth.Contract(TokenABI, poolCreateDialogState.token1.address);
                let balance1_v1 = await token1Inst.methods.balanceOf(account).call();
                let balance1_v2 = await getBalance(balance1_v1, poolCreateDialogState.token1.decimals);
                const token2Inst = new web3.eth.Contract(TokenABI, poolCreateDialogState.token2.address);
                let balance2_v1 = await token2Inst.methods.balanceOf(account).call();
                let balance2_v2 = await getBalance(balance2_v1, poolCreateDialogState.token2.decimals);
                setToken1Max(balance1_v2);
                setToken2Max(balance2_v2);
            }
        }
    }, [poolCreateDialogState])

    useEffect(async () => {
        if (poolCreateDialogState) {
            if (poolCreateDialogState.title === "Remove Liquidity") {
                const FactoryInst = new web3.eth.Contract(factoryAddress.abi, factoryAddress.address);
                const LPAddress = await FactoryInst.methods.getPair(token1.address, token2.address).call();
                const LPInst = new web3.eth.Contract(TokenABI, LPAddress);
                let lp_balance_v1 = await LPInst.methods.balanceOf(account).call();
                let lp_decimal = await LPInst.methods.decimals().call();
                let lp_balance_v2 = await getBalance(lp_balance_v1, lp_decimal);
                setLPMax(lp_balance_v2);
            } else {
                const token1Inst = new web3.eth.Contract(TokenABI, token1.address);
                let balance1_v1 = await token1Inst.methods.balanceOf(account).call();
                console.log(token1.name, balance1_v1, token1.decimals);
                let balance1_v2 = await getBalance(balance1_v1, token1.decimals);
                const token2Inst = new web3.eth.Contract(TokenABI, token2.address);
                let balance2_v1 = await token2Inst.methods.balanceOf(account).call();
                let balance2_v2 = await getBalance(balance2_v1, token2.decimals);
                setToken1Max(balance1_v2);
                setToken2Max(balance2_v2);
            }
        }
    }, [token1, token2])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        setGusState(gusMenu[1]);
    }, [gusMenu]);

    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    useEffect(() => {
        const logURI = (uri) => {
            console.log("WalletConnect URI", uri);
        };
        walletconnect.on(URI_AVAILABLE, logURI);

        return () => {
            walletconnect.off(URI_AVAILABLE, logURI);
        };
    }, []);
    useInactiveListener(!triedEager);
    // ** Actions
    const onConnectWallet = async (item, chain) => {
        setActivatingConnector(item.connector);
        setIsSelectingWallet(false);
        await activate(item.connector);
        window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${Number(chain.chainId).toString(16)}` }], // chainId must be in hexadecimal numbers
        })
    };
    const onDeactiveWallet = () => {
        setIsSelectingWallet(true);
        deactivate();
    };
    const retryConnect = (activating) => {
        setError(null);
        onConnectWallet(activating);
    };
    const changeWallet = (error) => {
        if (!error) {
            return true;
        } else {
            setError(null);
            setIsSelectingWallet(true);
        }
    }
    const walletDialog = (newValue) => {
        setIsOpenDialog(newValue);
    };
    const tokenDialogClose = (event, data) => {
        setPage(1);
        setList(chain.tokens.slice(0, 19));
        setTokenDialogState(false);
        if (data && data !== "backdropClick") {
            axios.get(`https://api.dex.guru/v2/tokens/search/${data.address}?network=${chain.symbol}`).then(res => {
                if (res.data.data.length) {
                    selectToken(res.data.data[0]);
                }
            });
        }
        setCustomToken([]);
    }
    const swapSettingDialogClose = () => {
        setSwapSettingDialogState(false);
    }

    const getErrorMessage = (error) => {
        if (error instanceof NoEthereumProviderError) {
            return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
        } else if (error instanceof UnsupportedChainIdError) {
            return "You're connected to an unsupported network.";
        } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect ||
            error instanceof UserRejectedRequestErrorFrame
        ) {
            return "Please authorize this website to access your Ethereum account.";
        } else {
            console.error(error);
            return "An unknown error occurred. Check the console for more details.";
        }
    };

    const buttonState = (data) => {
        setButton(data);
    }

    const liquidityDialogOpen = () => {
        setLiquidityDialogState(true);
    }

    const liquidityDialogClose = () => {
        setLiquidityDialogState(false);
        handleChange('panel3')
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const changeMaxFee = (value) => {
        if (value && value >= gusState.min) {
            setMaxFee(value);
            setErrorState(false);
        } else {
            setErrorState(true);
        }
    }

    const changeCustomToken = (value) => {
        if (value) {
            if (value.length > 2 && value.substr(0, 2) === "0x" && value.length === 42 && chain.tokens.find(data => (data.address === value)) === undefined) {
                axios.get(`https://api.dex.guru/v2/tokens/search/${value}?network=${chain.symbol}`).then(res => {
                    if (res.data.data.length) {
                        setCustomToken(res.data.data);
                    } else {
                        setCustomToken([false]);
                        setValidateText('No Result');
                    }
                });
            } else {
                token_filter(value).then(data => {
                    if (data.length) {
                        setCustomToken(data);
                    } else {
                        setCustomToken([false]);
                        setValidateText('No Result');
                    }
                })
            }
        } else {
            setCustomToken([]);
        }
    }

    const tokenImportDialogClose = () => {
        setTokenImportDialogState(false);
    }

    const importToken = () => {
        let token_data = customToken[0];
        token_data.chain_id = chain.chainId;
        token_import(token_data).then(data => {
            if (data === 'success') {
                setImportAlert({ state1: true, state2: "success", data: "Token Import Success!" });
            } else {
                setImportAlert({ state1: true, state2: "error", data: "Token Import Fail" });
            }
        });
        tokenImportDialogClose();
        setCustomToken([]);
    }

    const poolCreateDialogClose = () => {
        setPoolCreateDialogState(false);
    }

    const tokenSelect1 = (event) => {
        setToken1(event.target.value);
    };

    const tokenSelect2 = (event) => {
        setToken2(event.target.value);
    };

    const tokenApprove = async () => {
        const eth_balance = await web3.eth.getBalance(account);
        if (!eth_balance) {
            alert('Insufficient balance to pay for gas');
            return false;
        }

        let tokens;
        let token_amounts;
        if (poolCreateDialogState.title === 'Remove Liquidity') {
            if (LPMax === 0 || LPAmount === 0) {
                alert("Please Enter Amount of LP.");
                return false;
            }
            const FactoryInst = new web3.eth.Contract(factoryAddress.abi, factoryAddress.address);
            const LPAddress = await FactoryInst.methods.getPair(token1.address, token2.address).call();
            tokens = [LPAddress];
            token_amounts = [LPMax / 100 * LPAmount];
        } else {
            if (!token1_amount || !token2_amount) {
                alert("Please Enter Amount of Token.");
                return false;
            }
            tokens = [token1.address, token2.address];
            token_amounts = [token1_amount.current.value, token2_amount.current.value];
        }

        setApproveBtnState(true);
        for (let i = 0; i < tokens.length; i++) {
            const tokenInst = new web3.eth.Contract(TokenABI, tokens[i]);
            const decimals = await tokenInst.methods.decimals().call();

            const amount = (new BN(token_amounts[i]).mul(new BN(10).pow(new BN(decimals)))).toString();
            await tokenInst.methods.approve(routerAddress.address, amount).send({
                from: account
            });
        }

        setPoolBtnState(true);
        setApproveBtnState(false);
    }

    const addLiquidity = async () => {
        const eth_balance = await web3.eth.getBalance(account)

        if (!eth_balance) {
            alert('Insufficient balance to pay for gas');
            return false;
        }

        const RouterInst = new web3.eth.Contract(routerAddress.abi, routerAddress.address);
        const FactoryInst = new web3.eth.Contract(factoryAddress.abi, factoryAddress.address);

        const token1Inst = new web3.eth.Contract(TokenABI, token1.address);
        const token2Inst = new web3.eth.Contract(TokenABI, token2.address);
        let tokenInsts = [token1Inst, token2Inst];
        let deadline = new Date().valueOf() + 10000000;
        if (poolCreateDialogState.title === 'Remove Liquidity') {
            let LPAddress = await FactoryInst.methods.getPair(token1.address, token2.address).call();
            let LPInst = new web3.eth.Contract(TokenABI, LPAddress);
            let decimals = await LPInst.methods.decimals().call();
            const amount_v1 = LPMax / 100 * LPAmount;
            const amount_v2 = (new BN(amount_v1).mul(new BN(10).pow(new BN(decimals)))).toString();
            setApproveBtnState(true);
            await RouterInst.methods.removeLiquidity(
                token1.address,
                token2.address,
                amount_v2,
                0,
                0,
                account,
                deadline
            ).send({
                from: account
            });
        } else {
            let token_amounts = [token1_amount.current.value, token2_amount.current.value];
            for (let i = 0; i < token_amounts.length; i++) {
                let balance = await tokenInsts[i].methods.balanceOf(account).call();
                if (token_amounts[i] > balance) {
                    alert('Insufficient balance to pay for token');
                    return false;
                }
            }
            let amount1 = (new BN(token_amounts[0]).mul(new BN(10).pow(new BN(token1.decimals)))).toString();
            let amount2 = (new BN(token_amounts[1]).mul(new BN(10).pow(new BN(token2.decimals)))).toString();
            setApproveBtnState(true);
            await RouterInst.methods.addLiquidity(
                token1.address,
                token2.address,
                amount1,
                amount2,
                0,
                0,
                account,
                deadline
            ).send({
                from: account
            });
        }
        setApproveBtnState(false);
        setPoolBtnState(false);

        let pair = await FactoryInst.methods.getPair(token1.address, token2.address).call();
        let token_amounts1 = []
        for (let i = 0; i < tokenInsts.length; i++) {
            const balances = await tokenInsts[i].methods.balanceOf(pair).call();
            token_amounts1[i] = balances;
        }
        let token1_address;
        let token2_address;
        let token_amount_var;
        if (Number(token_amounts1[0]) > Number(token_amounts1[1])) {
            token1_address = token2.address;
            token2_address = token1.address;
            token_amount_var = token_amounts1[0];
            token_amounts1[0] = token_amounts1[1];
            token_amounts1[1] = token_amount_var;
        } else {
            token1_address = token1.address;
            token2_address = token2.address;
        }

        // create_pool(chain.test_chainId, pair, token1_address, token2_address, token_amounts1[0], token_amounts1[1]).then((data) => {
        //     get_pools(chain.test_chainId)
        create_pool(chain.chainId, pair, token1_address, token2_address, token_amounts1[0], token_amounts1[1]).then((data) => {
            get_pools(chain.chainId)
                .then((data) => {
                    if (data !== "NoResult") {
                        data.map((pool, index) => {
                            // let token_1 = chain.test_tokens.find(token => (token.address === pool.token1_address));
                            // let token_2 = chain.test_tokens.find(token => (token.address === pool.token2_address));
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
        });
    }

    return (
        <Box>
            <BootstrapDialog
                onClose={() => walletDialog(false)}
                aria-labelledby="customized-dialog-title"
                open={isOpenDialog}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={() => walletDialog(false)}>
                    {!active ? "Select Wallet" : "Your Account"}
                </BootstrapDialogTitle>
                <DialogContent dividers={scroll === 'body'}>
                    {active && (
                        <List>
                            <ListItem className="item">
                                <ListItemIcon className="symbol">
                                    <img src={connected.activating.logo2} alt={connected.activating.name} />
                                </ListItemIcon>
                                <ListItemText
                                    className="description"
                                    primary={`Connected to ${connected.activating.name}`}
                                />
                                <ListItemSecondaryAction className="action">
                                    <Tooltip arrow title="Change wallet">
                                        <IconButton size="small" onClick={onDeactiveWallet}>
                                            <LowPriorityRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <ListItem className="item">
                                <ListItemIcon className="symbol">
                                    <AccountBalanceWalletRoundedIcon />
                                </ListItemIcon>
                                <ListItemText
                                    className="description"
                                    primary={`${account.substring(0, 8)} ... ${account.substring(account.length - 4)}`}
                                />
                                <ListItemSecondaryAction className="action">
                                    <Link
                                        href={`https://cchain.explorer.avax.network/address/${account}`}
                                        target="_blank"
                                        underline="none"
                                    >
                                        <Tooltip arrow title="View on explorer">
                                            <IconButton size="small">
                                                <LaunchRoundedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Link>
                                    <CopyToClipboard
                                        text={account}
                                    >
                                        <Tooltip arrow title="Copy address">
                                            <IconButton size="small">
                                                <AssignmentTurnedInRoundedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </CopyToClipboard>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    )}
                    {
                        !active && (() => {
                            if (isSelectingWallet) {
                                return (
                                    <Grid container direction="column">
                                        <Stack direction="row" alignItems="center" spacing={1} sx={{ padding: "10px" }}>
                                            <Avatar sx={{ width: "36px", height: "36px" }}>1</Avatar>
                                            <Stack direction="row">
                                                <Typography>Accept&nbsp;</Typography>
                                                <Link underline="none"><Typography sx={{ color: "#34F14B" }}>Terms of Service</Typography></Link>
                                                <Typography>&nbsp;and&nbsp;</Typography>
                                                <Link underline="none"><Typography sx={{ color: "#34F14B" }}>Privacy Policy</Typography></Link>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="column" sx={{ marginLeft: "40px" }}>
                                            <FormControlLabel control={<Checkbox />} label="I read and accept" />
                                        </Stack>
                                        <Stack direction="row" alignItems="center" spacing={1} sx={{ padding: "10px" }}>
                                            <Avatar sx={{ width: "36px", height: "36px" }}>2</Avatar>
                                            <Typography>Choose Network</Typography>
                                        </Stack>
                                        <Grid container>
                                            {Chains.map((data, index) => {
                                                return (
                                                    <Grid lg={2.4} key={index} container justifyContent="center" sx={{ margin: "10px 0" }}>
                                                        <Button className="netButton" sx={{ padding: "10px 20px", borderRadius: "12px" }} onClick={() => setChain(data)}>
                                                            {chain.chainId === data.chainId ?
                                                                <Badge
                                                                    badgeContent={<DoneIcon sx={{ color: "white", width: "10px" }} />}
                                                                    color="success"
                                                                >
                                                                    <Typography component="img" src={data.logo2}></Typography>
                                                                </Badge>
                                                                :
                                                                <Typography component="img" src={data.logo2}></Typography>
                                                            }
                                                        </Button>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                        <Stack direction="row" alignItems="center" spacing={1} sx={{ padding: "10px" }}>
                                            <Avatar sx={{ width: "36px", height: "36px" }}>3</Avatar>
                                            <Typography>Choose Wallet</Typography>
                                        </Stack>
                                        <Grid container>
                                            {Wallets.map((data, index) => {
                                                return (
                                                    <Grid lg={2.4} key={index} container justifyContent="center" sx={{ margin: "10px 0" }}>
                                                        <Button className="netButton" onClick={() => onConnectWallet(data, chain)} sx={{ padding: "10px 20px", borderRadius: "12px" }}><Typography component="img" src={data.logo1}></Typography></Button>
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </Grid>
                                )
                            } else if (!isSelectingWallet) {
                                const activating = Wallets.find(item => (item.connector === activatingConnector || item.connector === connector));
                                if (activating) {
                                    return (
                                        <List>
                                            <ListItem
                                                className="state"
                                            >
                                                <ListItemIcon className="symbol">
                                                    {error ? (
                                                        <IconButton>
                                                            <WarningRoundedIcon />
                                                        </IconButton>
                                                    ) : <CircularProgress />}
                                                </ListItemIcon>
                                                <ListItemText className="description">
                                                    {error ? getErrorMessage(error) : "Initializing..."}
                                                </ListItemText>
                                                {
                                                    error && (
                                                        <ListItemSecondaryAction>
                                                            <IconButton onClick={() => retryConnect(activating)}>
                                                                <ReplayIcon />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    )
                                                }
                                            </ListItem>
                                            <ListItem
                                                className="item activating-item"
                                                onClick={() => changeWallet(error)}
                                            >
                                                <ListItemIcon className="symbol">
                                                    <img
                                                        src={activating.logo2}
                                                        alt={activating.logo2}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    className="activating-description"
                                                    primary={activating.name}
                                                />
                                            </ListItem>
                                        </List>
                                    )
                                } else {
                                    onDeactiveWallet();
                                }
                            }
                        })()
                    }
                </DialogContent>
            </BootstrapDialog>

            {chain.tokens.length ?
                <BootstrapDialog
                    onClose={tokenDialogClose}
                    aria-labelledby="customized-dialog-title1"
                    open={tokenDialogState}
                >
                    <BootstrapDialogTitle id="customized-dialog-title1" sx={{ maxWidth: "476px" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "5px" }}>
                            <Typography>Select a Token</Typography>
                            <IconButton onClick={tokenDialogClose}><CloseIcon /></IconButton>
                        </Stack>
                        <Divider sx={{ margin: "15px 5px 5px" }} />
                    </BootstrapDialogTitle>
                    <DialogContent sx={{ maxWidth: "476px" }}>
                        <Box sx={{ margin: "0 24px" }}>
                            <TextField
                                id="outlined-adornment-weight"
                                aria-describedby="outlined-weight-helper-text"
                                placeholder="Search name or paste"
                                sx={{ width: "100%", margin: "0 0 10px", background: "#262525", borderRadius: "12px" }}
                                onKeyUp={(e) => changeCustomToken(e.target.value.toLowerCase())}
                            />
                            <Typography sx={{ fontSize: "18px", margin: "10px 0" }}>Common bases</Typography>
                            <Grid container sx={{ margin: "0 0 16px" }} spacing={1}>
                                {baseToken.map((data, index) => (
                                    <Button key={index} onClick={(e) => tokenDialogClose(e, chain.tokens[0])} color="inherit" sx={{ margin: "4px 4px", border: "1px solid #7E8B74", borderRadius: "14px" }}
                                        startIcon={chain.tokens[0].logoURI !== null ?
                                            <Avatar src={chain.tokens[0].logoURI} sx={{ width: "30px", height: "30px" }} />
                                            :
                                            <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{chain.tokens[0].symbol.substring(0, 1)}</Avatar>
                                        }
                                    >{chain.tokens[0].symbol}</Button>
                                ))
                                }
                            </Grid>
                            <Divider sx={{ mb: "14px" }} />
                            <Box sx={{ overflow: "auto" }} onScroll={onScroll} ref={listInnerRef}>
                                <Box sx={{ maxHeight: "200px" }}>
                                    {customToken.length ?
                                        customToken[0] ?
                                            customToken.map((data, index) => (
                                                customToken.length === 1 && !chain.tokens.find(data => (data.address === customToken[0].address)) ?
                                                    <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: "10px" }}>
                                                        <Stack direction="row" alignItems="center">
                                                            {data.logoURI !== null ?
                                                                <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                                :
                                                                <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                            }&nbsp;&nbsp;
                                                            <Stack direction="column">
                                                                <Typography>{data.name}</Typography>
                                                                <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>{data.symbol}</Typography>
                                                            </Stack>
                                                        </Stack>
                                                        <Button variant="contained" size="small" onClick={() => setTokenImportDialogState(true)} sx={{ borderRadius: "6px", color: "white" }}>import</Button>
                                                    </Stack>
                                                    :
                                                    <MenuItem key={index} onClick={(e) => tokenDialogClose(e, data)}>
                                                        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: "10px" }}>
                                                            <Stack direction="row" alignItems="center" sx={{ padding: "2px 0" }}>
                                                                {data.logoURI !== null ?
                                                                    <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                                    :
                                                                    <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                                }&nbsp;&nbsp;
                                                                <Stack direction="column">
                                                                    <Typography>{data.name}</Typography>
                                                                    <Typography sx={{ fontSize: "11px", color: "#7E8B74" }}>{data.symbol}</Typography>
                                                                </Stack>
                                                            </Stack>
                                                            {(customToken.length === 1 && !chain.tokens.find(data => (data.address === customToken[0].address))) &&
                                                                <Button variant="contained" size="small" onClick={() => setTokenImportDialogState(true)} sx={{ borderRadius: "6px", color: "white" }}>import</Button>
                                                            }
                                                        </Stack>
                                                    </MenuItem>
                                            ))
                                            :
                                            <Alert severity="error">{validateText}</Alert>
                                        :
                                        list.map((data, index) => (
                                            <MenuItem key={index} onClick={(e) => tokenDialogClose(e, data)}>
                                                <Stack direction="row" alignItems="center" sx={{ padding: "2px 0" }}>
                                                    {data.logoURI !== null ?
                                                        <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                        :
                                                        <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                    }&nbsp;&nbsp;
                                                    <Stack direction="column">
                                                        <Typography>{data.name}</Typography>
                                                        <Typography sx={{ fontSize: "11px", color: "#7E8B74" }}>{data.symbol}</Typography>
                                                    </Stack>
                                                </Stack>
                                            </MenuItem>
                                        ))
                                    }
                                </Box>
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions sx={{ background: "#292929", justifyContent: "center" }}>
                        <Typography sx={{ padding: "10px" }}>Manage Tokens</Typography>
                    </DialogActions>
                </BootstrapDialog>
                :
                <></>
            }

            {customToken.length ?
                <BootstrapDialog
                    onClose={tokenImportDialogClose}
                    aria-labelledby="customized-dialog-title1"
                    open={tokenImportDialogState}
                >
                    <BootstrapDialogTitle id="customized-dialog-title1" sx={{ maxWidth: "429px" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "5px" }}>
                            <Typography>Import Token</Typography>
                            <IconButton onClick={tokenImportDialogClose}><CloseIcon /></IconButton>
                        </Stack>
                        <Divider sx={{ margin: "15px 5px 5px" }} />
                    </BootstrapDialogTitle>
                    <DialogContent sx={{ maxWidth: "429px" }}>
                        <Box sx={{ margin: "0 45px" }}>
                            <Paper variant="outlined" sx={{ padding: "23px 28px", borderRadius: "16px", background: "transparent" }}>
                                <Stack direction="row" alignItems="center">
                                    {customToken[0].logoURI !== null ?
                                        <Avatar src={customToken[0].logoURI} sx={{ width: "30px", height: "30px" }} />
                                        :
                                        <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{customToken[0].symbol.substring(0, 1)}</Avatar>
                                    }&nbsp;&nbsp;
                                    <Stack direction="column">
                                        <Typography>{customToken[0].name}</Typography>
                                        <Typography sx={{ fontSize: "12px", color: "#7E8B74" }}>{customToken[0].symbol}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack sx={{ pl: "30px" }}>
                                    <Divider variant="inset" sx={{ margin: "10px 0 20px" }} />
                                    <Typography sx={{ wordBreak: "break-word" }}>{customToken[0].address}</Typography>
                                </Stack>
                            </Paper>
                            <Paper sx={{ padding: "23px 28px", margin: "12px 0", borderRadius: "16px", background: "rgba(248, 79, 79, 0.25)" }}>
                                <Stack direction="row" spacing={1.6} alignItems="center">
                                    <InfoIcon sx={{ color: "#DB4848" }} />
                                    <Typography sx={{ color: "#DB4848" }}>Trade at your own risk!</Typography>
                                </Stack>
                                <Stack sx={{ pl: "37px", pt: "7px" }}>
                                    <Typography>
                                        Anyone can create a token, including creating fake versions
                                        of existing tokens that claim to represent projects
                                    </Typography>
                                    <Typography sx={{ padding: "15px 0 8px" }}>
                                        if you purchase this token, you may not be able to sell it back
                                    </Typography>
                                    <FormControlLabel control={<Checkbox onChange={() => setImportState(importState ? false : true)} />} label="I understand" />
                                </Stack>
                            </Paper>
                            <Button fullWidth disabled={importState} variant="contained" onClick={importToken} sx={{ borderRadius: "12px", p: "10px", margin: "12px 0", fontWeight: "700", color: "white", fontSize: "16px" }}>import</Button>
                        </Box>
                    </DialogContent>
                </BootstrapDialog>
                :
                <></>
            }

            <BootstrapDialog
                onClose={swapSettingDialogClose}
                aria-labelledby="customized-dialog-title1"
                open={swapSettingDialogState}
            >
                <BootstrapDialogTitle id="customized-dialog-title1" sx={{ maxWidth: "476px" }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <IconButton onClick={swapSettingDialogClose}><ChevronLeftIcon /></IconButton>
                        <Typography>Advanced Settings</Typography>
                        <Link underline="none" sx={{ color: "#7E8B74 !important", fontSize: "14px" }}>Reset</Link>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent sx={{ maxWidth: "476px" }}>
                    <CAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ background: "transparent" }}>
                        <CAccordionSummary
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                                <Typography>Gas Price</Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: "14px" }}>{`${gusState.name} (${gusState.min} - ${gusState.max} Gwei)`}&nbsp;</Typography>
                            </Stack>
                        </CAccordionSummary>
                        <CAccordionDetails>
                            <Stack direction="row" justifyContent="space-between" sx={{ padding: "0 30px" }}>
                                <Button sx={{ borderRadius: "29px", color: "white" }} variant={button === 1 ? "contained" : "inherit"} onClick={() => buttonState(1)}>Basic</Button>
                                <Button sx={{ borderRadius: "29px", color: "white" }} variant={button === 2 ? "contained" : "inherit"} onClick={() => buttonState(2)}>Advanced</Button>
                            </Stack>
                            <Box sx={{ mt: "25px" }}>
                                {button === 1 &&
                                    <RadioGroup sx={{ width: "100%" }} defaultValue={gusState.name} >
                                        <Paper sx={{ borderRadius: "14px", background: "#101010 !important" }}>
                                            {gusMenu.map((data, index) => (
                                                <Stack key={index}>
                                                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: "8px 16px" }}>
                                                        <Stack direction="row" alignItems="center">
                                                            <FormControlLabel value={data.name} control={<Radio />} label={data.name} onChange={() => setGusState(data)} />
                                                            <Typography align="left" sx={{ color: "#7E8B74", fontSize: "14px" }}>{data.time}</Typography>
                                                        </Stack>
                                                        <Typography align="right" sx={{ fontSize: "14px" }}>{`${data.min}-${data.max}`} Gwei</Typography>
                                                    </Stack>
                                                    {index < gusMenu.length - 1 &&
                                                        <Divider />
                                                    }
                                                </Stack>
                                            ))
                                            }
                                        </Paper>
                                    </RadioGroup>
                                }
                                {button === 2 &&
                                    <Box>
                                        <Alert sx={{ background: "rgba(55, 175, 67, 0.1) !important" }} severity="info">
                                            <Typography align="right">Current base fee is {gusState.min} Gwei</Typography>
                                        </Alert>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mt: "24px" }}>
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>MAX priority fee</Typography>
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Estimated high: {Math.floor(gusState.max - gusState.min)} Gwei</Typography>
                                        </Stack>
                                        <Paper sx={{ background: "#101010 !important", borderRadius: "12px" }}>
                                            <InputBase
                                                type="number"
                                                sx={{ flex: 1, color: "white", width: "100%", padding: "15px 20px" }}
                                                defaultValue={5.00}
                                                endAdornment={<InputAdornment position="end">Gwei</InputAdornment>}
                                            />
                                        </Paper>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mt: "24px" }}>
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>MAX fee</Typography>
                                            <Typography sx={{ color: "#7E8B74", fontSize: "14px" }}>Estimated high: {Math.ceil(gusState.max)}Gwei</Typography>
                                        </Stack>
                                        <Paper sx={{ background: "#101010 !important", borderRadius: "12px", border: `${errorState ? "2px solid #ff8078" : "none"}` }}>
                                            <InputBase
                                                type="number"
                                                sx={{ flex: 1, color: "white", width: "100%", padding: "15px 20px" }}
                                                defaultValue={maxFee}
                                                endAdornment={<InputAdornment position="end">Gwei</InputAdornment>}
                                                onChange={(e) => changeMaxFee(e.target.value)}
                                            />
                                        </Paper>
                                        {errorState &&
                                            <Typography sx={{ fontSize: "14px", color: "#ff8078", margin: "5px" }}>{`Max price can't be lower than base fee`}</Typography>
                                        }
                                        <Paper variant="outlined" sx={{ padding: "23px", background: "transparent", mt: "24px", borderRadius: "14px", borderColor: "#FFFFFF" }}>
                                            <Stack direction="row" justifyContent="space-between" sx={{ mb: "15px" }}>
                                                <Typography>Wait time</Typography>
                                                <Typography>~12 sec</Typography>
                                            </Stack>
                                            <Stack direction="row" justifyContent="space-between">
                                                <Typography>Fee range</Typography>
                                                <Typography>{(maxFee <= Math.ceil(gusState.max) && maxFee >= gusState.min) ? maxFee : `${gusState.max}–${maxFee}`} Gwei</Typography>
                                            </Stack>
                                        </Paper>
                                    </Box>
                                }
                            </Box>
                        </CAccordionDetails>
                    </CAccordion>
                    <CAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ background: "transparent" }}>
                        <CAccordionSummary
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                                <Typography>Slippage tolerance</Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: "14px" }}>{activeSlipageButton}%&nbsp;</Typography>
                            </Stack>
                        </CAccordionSummary>
                        <CAccordionDetails>
                            <Paper sx={{ padding: "4px", margin: "0 30px", background: "#101010 !important" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    {[0.1, 0.5, 1, 3].map((data, index) => (
                                        <Button key={index} onClick={() => setActiveSlipageButton(data)} sx={{ padding: "8px", borderRadius: "5px", color: "white", background: `${data === activeSlipageButton && "#7E8B74"}` }}>{data}%</Button>
                                    ))}
                                    <Stack>
                                        <TextField
                                            id="outlined-textarea"
                                            placeholder="Custom"
                                            size="small"
                                            type="number"
                                            onChange={(e) => setActiveSlipageButton(e.target.value ? e.target.value : 0.1)}
                                            sx={{ color: "white", width: "85px" }}
                                        />
                                    </Stack>
                                </Stack>
                            </Paper>
                        </CAccordionDetails>
                    </CAccordion>
                    <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0 0 16px" }}>
                        <Typography>Partial fill</Typography>
                        <IOSSwitch />
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0 0 16px" }}>
                        <Typography>Compatiblility Mode</Typography>
                        <IOSSwitch />
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0 16px 16px" }}>
                        <Typography>Use legacy transaction type</Typography>
                        <IOSSwitch />
                    </Stack>
                    <CAccordion expanded={expanded === 'panel3'} onChange={liquidityDialogOpen} sx={{ background: "transparent" }}>
                        <CAccordionSummary
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                                <Typography>Liquidity Sources</Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: "14px" }}>{liquiditySources.length}&nbsp;</Typography>
                            </Stack>
                        </CAccordionSummary>
                    </CAccordion>
                    <CAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ background: "transparent" }}>
                        <CAccordionSummary
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                                <Typography>Custom Tokens</Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: "14px" }}>0&nbsp;</Typography>
                            </Stack>
                        </CAccordionSummary>
                        <CAccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </CAccordionDetails>
                    </CAccordion>
                </DialogContent>
            </BootstrapDialog>

            <BootstrapDialog
                onClose={liquidityDialogClose}
                open={liquidityDialogState}
                className="ls_dialog"
            >
                <BootstrapDialogTitle id="customized-dialog-title2">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <IconButton onClick={liquidityDialogClose}><ChevronLeftIcon /></IconButton>
                        <Typography>Liquidity Sources</Typography>
                        <Link underline="none" sx={{ color: "#7E8B74 !important", fontSize: "14px" }}>Reset</Link>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent className="ls_dialog_content" sx={{ margin: "10px" }}>
                    <TextField
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end"><SearchIcon sx={{ fontSize: "30px" }} />&nbsp;&nbsp;</InputAdornment>
                            ),
                        }}
                        sx={{ width: "100%", background: "black", borderRadius: "12px" }}
                    />
                    <List sx={{ background: 'transparent' }}>
                        {liquiditySources.map((value, index) => {
                            const labelId = `checkbox-list-secondary-label-${index}`;
                            return (
                                <Stack key={index}>
                                    {index % 10 === 0 &&
                                        <Divider orientation="horizontal" textAlign="left"><Typography sx={{ fontSize: "18px" }}>{index}-{index + 9 > liquiditySources.length - 1 ? liquiditySources.length - 1 : index + 9}</Typography></Divider>
                                    }
                                    <ListItem sx={{ padding: "0" }}>
                                        <ListItemButton sx={{ padding: "8px 10px" }} onClick={handleToggle(index)}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                                                <Stack direction="row">
                                                    <Typography component="img" src={Inch} sx={{ mr: "10px", width: "24px", height: "24px" }} />
                                                    <Typography sx={{ fontSize: "18px" }}>1INCH LP v1.0</Typography>
                                                </Stack>
                                                <Checkbox edge="end" onChange={handleToggle(index)} checked={checked.indexOf(index) !== -1} inputProps={{ 'aria-labelledby': labelId }} />
                                            </Stack>
                                        </ListItemButton>
                                    </ListItem>
                                </Stack>
                            );
                        })}
                    </List>
                </DialogContent>
            </BootstrapDialog>

            {poolCreateDialogState &&
                <BootstrapDialog
                    onClose={poolCreateDialogClose}
                    aria-labelledby="customized-dialog-title2"
                    open={poolCreateDialogState}
                >
                    <BootstrapDialogTitle id="customized-dialog-title2" sx={{ p: "20px 10px 10px 20px" }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ ml: "5px" }}>
                            <Typography sx={{ fontSize: "20px" }}>{poolCreateDialogState.title}</Typography>
                            <IconButton onClick={poolCreateDialogClose}><CloseIcon /></IconButton>
                        </Stack>
                    </BootstrapDialogTitle>
                    <DialogContent sx={{ m: "5px" }}>
                        <Grid container>
                            <Grid xs={10}>
                                <Select
                                    fullWidth
                                    value={token1}
                                    onChange={tokenSelect1}
                                    sx={{ background: "black" }}
                                    MenuProps={MenuProps}
                                >
                                    {/* {chain.test_tokens.map((data, index) => ( */}
                                    {chain.tokens.map((data, index) => (
                                        <MenuItem value={data} key={index}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    {data.logoURI !== null ?
                                                        <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                        :
                                                        <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                    }
                                                    <Typography>{data.symbol}</Typography>
                                                </Stack>
                                                <Typography>{data.name.length > 25 ? `${data.name.slice(0, 8)}...${data.name.slice(-8)}` : data.name}</Typography>
                                            </Stack>
                                        </MenuItem>
                                    ))
                                    }
                                </Select>
                                <Select
                                    fullWidth
                                    value={token2}
                                    onChange={tokenSelect2}
                                    sx={{ my: "20px", background: "black" }}
                                    MenuProps={MenuProps}
                                >
                                    {/* {chain.test_tokens.map((data, index) => ( */}
                                    {chain.tokens.map((data, index) => (
                                        <MenuItem value={data} key={index}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                    {data.logoURI !== null ?
                                                        <Avatar src={data.logoURI} sx={{ width: "30px", height: "30px" }} />
                                                        :
                                                        <Avatar sx={{ width: "30px", height: "30px", color: "white" }}>{data.symbol.substring(0, 1)}</Avatar>
                                                    }
                                                    <Typography>{data.symbol}</Typography>
                                                </Stack>
                                                <Typography>{data.name.length > 18 ? `${data.name.slice(0, 8)}...${data.name.slice(-8)}` : data.name}</Typography>
                                            </Stack>
                                        </MenuItem>
                                    ))
                                    }
                                </Select>
                            </Grid>
                            <Grid xs={2}>

                            </Grid>
                        </Grid>
                        {poolCreateDialogState.title === 'Remove Liquidity' ?
                            <Box>
                                <Stack direction="row" justifyContent="space-between" sx={{ py: "10px" }}>
                                    <Typography>LP amount (%)</Typography>
                                    <Typography>Max: {LPMax}</Typography>
                                </Stack>
                                <Box sx={{ px: "10px" }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={0}
                                        value={LPAmount}
                                        onChange={(e) => setLPAmount(e.target.value)}
                                        valueLabelDisplay="auto"
                                        step={1}
                                        min={0}
                                        max={100}
                                    />
                                </Box>
                            </Box>
                            :
                            <Box>
                                <Stack sx={{ py: "10px" }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography>Token1 amount</Typography>
                                        <Typography>Max: {token1Max}</Typography>
                                    </Stack>
                                    <TextField size="small" type="number" inputRef={token1_amount} />
                                </Stack>
                                <Stack sx={{ py: "10px" }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography>Token2 amount</Typography>
                                        <Typography>Max: {token2Max}</Typography>
                                    </Stack>
                                    <TextField size="small" type="number" inputRef={token2_amount} />
                                </Stack>
                            </Box>
                        }
                        <Stack direction="row" justifyContent="center" sx={{ py: "20px" }}>
                            {active ?
                                poolBtnState ?
                                    <ConnectButton variant="contained" disabled={approveBtnState} onClick={addLiquidity}>{poolCreateDialogState.title === 'Remove Liquidity' ? 'Remove' : 'Supply'}</ConnectButton>
                                    :
                                    <ConnectButton variant="contained" disabled={approveBtnState} onClick={tokenApprove}>Give permission to use {poolCreateDialogState.title === 'Remove Liquidity' ? `LP` : `${token1.symbol} and ${token2.symbol}`}</ConnectButton>
                                :
                                <ConnectButton onClick={() => walletDialog(true)}>Connect Wallet</ConnectButton>
                            }
                        </Stack>
                    </DialogContent>
                </BootstrapDialog>
            }
        </Box>
    );
};

export default Cwallet;
