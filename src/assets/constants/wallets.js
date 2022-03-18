import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";

// import React, { FC, useMemo } from 'react';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import {
//     LedgerWalletAdapter,
//     PhantomWalletAdapter,
//     SlopeWalletAdapter,
//     SolflareWalletAdapter,
//     SolletExtensionWalletAdapter,
//     SolletWalletAdapter,
//     TorusWalletAdapter,
// } from '@solana/wallet-adapter-wallets';
// import {
//     WalletModalProvider,
//     WalletDisconnectButton,
//     WalletMultiButton
// } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');
// import WalletConnect from "../img/common/img/wallets/wallet-connect.svg";
import Frame293 from '../img/common/Frame 293.png';
import Frame294 from '../img/common/Frame 294.png';
import Frame295 from '../img/common/Frame 295.png';
import Frame296 from '../img/common/Frame 296.png';
import Frame297 from '../img/common/Frame 297.png';
import Frame298 from '../img/common/Frame 298.png';
import Frame299 from '../img/common/Frame 299.png';
import Frame300 from '../img/common/Frame 300.png';
import Frame301 from '../img/common/Frame 301.png';
import Frame302 from '../img/common/Frame 302.png';
import image1 from '../img/common/image 1.png';
import image1_1 from '../img/common/image (1) 1.png';
import image2_1 from '../img/common/image (2) 1.png';
import image3_1 from '../img/common/image (3) 1.png';
import image3_2 from '../img/common/image (3) 2.png';
import image3_3 from '../img/common/image (3) 3.png';
import image3_4 from '../img/common/image (3) 4.png';
import image3_5 from '../img/common/image (3) 5.png';
import image3_6 from '../img/common/image (3) 6.png';
import image3_7 from '../img/common/image (3) 7.png';
import crypto7 from '../img/common/crypto-7.png';
import Arbitrum from '../img/common/Arbitrum.png';
import ETH from '../img/common/eth.png';
import avalanche from '../img/common/avalanche.png';
import polygon from '../img/common/polygon.png';
import okex from '../img/common/okex.png';
import fantom from '../img/common/fantom.png';
import optimism from '../img/common/optimism.png';
import solana from '../img/common/solana.png';
import Frame281 from '../img/common/Frame 281.png';
import Frame281_1 from '../img/common/Frame 281-1.png';
import Frame282 from '../img/common/Frame 282.png';
import Frame282_1 from '../img/common/Frame 282-1.png';
import Frame283 from '../img/common/Frame 283.png';
import Frame283_1 from '../img/common/Frame 283-1.png';
import Frame284 from '../img/common/Frame 284.png';
import Frame285 from '../img/common/Frame 285.png';
import Frame285_1 from '../img/common/Frame 285-1.png';
import LP_ETH_BSC from '../img/common/lp-eth-bsc 1.png';
import Crypto11 from '../img/common/avalanche-avax-logo 1.png';
import Crypto5 from '../img/common/crypto-5.png';
import Crypto from '../img/common/crypto.png';
import Crypto6 from '../img/common/crypto-6.png';
import Crypto1 from '../img/common/crypto-1.png';
import Crypto2 from '../img/common/crypto-2.png';
import Crypto3 from '../img/common/crypto-3.png';
import Crypto4 from '../img/common/crypto-4.png';
import Crypto8 from '../img/common/crypto-8.png';
import usdt from '../img/common/usdt.png';
import usdc from '../img/common/usdc.png';
// import weth from '../img/common/weth2.png';

import eth_tokens from '../token-json/eth_token.json'
import bsc_tokens from '../token-json/bsc_token.json'
import polygon_tokens from '../token-json/polygon_token.json'
import arbitrum_tokens from '../token-json/arbitrum_token.json'
import avalanche_tokens from '../token-json/avalanche_token.json'
import optimism_tokens from '../token-json/optimism_token.json'
import fantom_tokens from '../token-json/fantom_token.json'

// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);
// const [bscTokens, setBscTokens] = useState([]);

const LPs = [
    {
        name: "ETH",
        logo: LP_ETH_BSC
    },
    {
        name: "USDT",
        logo: usdt
    }
]

const Wallets = [
    {
        name: "MetaMask",
        logo1: Frame293,
        logo2: image1,
        connector: injected,
    },
    {
        name: "BSC WALLET",
        logo1: Frame294,
        logo2: image1_1,
        connector: injected,
    },
    {
        name: "Solet",
        logo1: Frame295,
        logo2: image2_1,
        connector: injected,
    },
    {
        name: "Phantom",
        logo1: Frame296,
        logo2: image3_1,
        connector: injected,
    },
    {
        name: "Avalanche",
        logo1: Frame297,
        logo2: image3_2,
        connector: injected,
    },
    {
        name: "BitKeep",
        logo1: Frame298,
        logo2: image3_3,
        connector: injected,
    },
    {
        name: "MathWallet",
        logo1: Frame299,
        logo2: image3_4,
        connector: injected,
    },
    {
        name: "Solflare",
        logo1: Frame300,
        logo2: image3_5,
        connector: injected,
    },
    {
        name: "TrushWallet",
        logo1: Frame301,
        logo2: image3_6,
        connector: injected,
    },
    {
        name: "SafePal",
        logo1: Frame302,
        logo2: image3_7,
        connector: injected,
    }
];
let Chains = [
    {
        chainId: 97,
        logo1: crypto7,
        logo2: Frame282,
        logo3: Crypto6,
        wallets: [Wallets[0]],
        tokens: [
            {chainId:97,address:"0xA1B71d61E071A6Cc277d13BEf2841CD8F363e017",name:"TestBSCToken1",symbol:"TBT1",decimals:18,logoURI:null},
            {chainId:97,address:"0x27C449c03D8776Bcc9fbe7E9e9c1b2aFC5D5B87f",name:"TestBSCToken2",symbol:"TBT2",decimals:18,logoURI:null},
            {chainId:97,address:"0x66712Cd82EE13eCaA7f2C8D9EC4DC0bC2f97ce25",name:"TestBSCToken3",symbol:"TBT3",decimals:18,logoURI:null},
            {chainId:97,address:"0xb71dFe4530C870d428F480B3bd2a55B8eAB8E9f2",name:"TestBSCToken4",symbol:"TBT4",decimals:18,logoURI:null},
            {chainId:97,address:"0x472217D927b9fA3a7Dbe3480716493803B3696D4",name:"TestBSCToken5",symbol:"TBT5",decimals:18,logoURI:null}
        ],
        swaps: [],
        name: 'BSC Mainnet',
        symbol: 'bsc'
    },
    {
        chainId: 4,
        logo1: ETH,
        logo2: Frame281,
        logo3: Crypto5,
        wallets: [Wallets[0]],
        tokens: [
            {chainId:4,address:"0x985Be8bB9Bc3421CdfD6fA40e6c8Ebfd84286681",name:"TestETHToken1",symbol:"TET1",decimals:18,logoURI:null},
            {chainId:4,address:"0x7F95D140E90de5ed610c2f67DCc12De18058B444",name:"TestETHToken2",symbol:"TET2",decimals:18,logoURI:null},
            {chainId:4,address:"0xbaf6600fDF66114717867fCC9d8E87bbc2ffC818",name:"TestETHToken3",symbol:"TET3",decimals:18,logoURI:null},
            {chainId:4,address:"0xE0761b4665549e8a32c795DDEAF45d1D9ddE1935",name:"TestETHToken4",symbol:"TET4",decimals:18,logoURI:null},
            {chainId:4,address:"0x5Fc2Cf88b8987ca21e879924D4aE8576Ad1D1d12",name:"TestETHToken5",symbol:"TET5",decimals:18,logoURI:null}
        ],
        swaps: [],
        name: 'Ethereum',
        symbol: 'eth'
    },
    {
        chainId: 80001,
        logo1: polygon,
        logo2: Frame283,
        logo3: Crypto,
        wallets: [Wallets[0]],
        tokens: [
            {chainId:80001,address:"0x98666E35D13968a2cdbdf98Cf3E92fD2a1256Aee",name:"TestPolyToken1",symbol:"TPT1",decimals:18,logoURI:null},
            {chainId:80001,address:"0x4cB6b11C5a71cE6E2C0Dc76279F68B74dDac4287",name:"TestPolyToken2",symbol:"TPT2",decimals:18,logoURI:null},
            {chainId:80001,address:"0xaA4FC897E1dd242386CC2Ba2F1258660CC2DFa11",name:"TestPolyToken3",symbol:"TPT3",decimals:18,logoURI:null},
            {chainId:80001,address:"0x71fd501f0A917757A6F5b3D064E9f3ccBC3Db2dD",name:"TestPolyToken4",symbol:"TPT4",decimals:18,logoURI:null},
            {chainId:80001,address:"0x2BD205797a15458cBD19EcdC2e87F47ce81252c4",name:"TestPolyToken5",symbol:"TPT5",decimals:18,logoURI:null}
        ],
        swaps: [],
        name: 'Polygon Network',
        symbol: 'polygon'
    },
    {
        chainId: 138,
        logo1: solana,
        logo2: Frame284,
        logo3: Crypto1,
        wallets: [Wallets[4]],
        tokens: [
            { name: "Avalanche", symbol:"AVAX", logoURI: avalanche },
            { name: "Tether USD", symbol:"USDT", logoURI: usdt },
            { name: "USD Coin", symbol:"USDC", logoURI: usdc }
        ],
        swaps: [],
        name: 'Solana',
        symbol: 'sol'
    },
    {
        chainId: 42161,
        logo1: Arbitrum,
        logo2: Frame285,
        logo3: Crypto8,
        wallets: [Wallets[0]],
        tokens: arbitrum_tokens.tokens,
        swaps: [],
        name: 'Arbitrum',
        symbol: 'arbitrum'
    },
    {
        chainId: 10,
        logo1: optimism,
        logo2: Frame282_1,
        logo3: Crypto4,
        wallets: [Wallets[0]],
        tokens: optimism_tokens.tokens,
        swaps: [],
        name: 'Optimism',
        symbol: 'optimism'
    },
    {
        chainId: 43113,
        logo1: avalanche,
        logo2: Frame281_1,
        logo3: Crypto11,
        wallets: [Wallets[0]],
        tokens: [
            {chainId:43113,address:"0xCB1deAB9A0a0B5e19BdC876bDb96542bACBb2367",name:"TestAvaxToken1",symbol:"TAVT1",decimals:18,logoURI:null},
            {chainId:43113,address:"0x3E685E032260F76067635Da49811D648d6C4735f",name:"TestAvaxToken2",symbol:"TAVT2",decimals:18,logoURI:null},
            {chainId:43113,address:"0x7977fb35253aeD9368fd90194881CaE8dcf44AF2",name:"TestAvaxToken3",symbol:"TAVT3",decimals:18,logoURI:null},
            {chainId:43113,address:"0x14f3BEECD7026B18ef9CEcCCC7dce88aef56ed14",name:"TestAvaxToken4",symbol:"TAVT4",decimals:18,logoURI:null},
            {chainId:43113,address:"0x29Fe9Ec498C8cea19905AD8ea0234D3daC0B6B41",name:"TestAvaxToken5",symbol:"TAVT5",decimals:18,logoURI:null}
        ],
        swaps: [],
        name: 'Avalanche',
        symbol: 'avalanche'
    },
    {
        chainId: 4002,
        logo1: fantom,
        logo2: Frame283_1,
        logo3: Crypto3,
        wallets: [Wallets[0]],
        tokens: [
            {chainId:4002,address:"0x8f86F66D7c5E7b73E6AcF2c4f82F37b0f533C0d9",name:"TestFTMToken1",symbol:"TFT1",decimals:18,logoURI:null},
            {chainId:4002,address:"0x0F605D0064e4A3609Adee6fc7CC21226CF4A0dd2",name:"TestFTMToken2",symbol:"TFT2",decimals:18,logoURI:null},
            {chainId:4002,address:"0x566c1295714141da69eAD53feE19B16B8Bc0A006",name:"TestFTMToken3",symbol:"TFT3",decimals:18,logoURI:null},
            {chainId:4002,address:"0x2423C9a8B910484Be622FdA3f9B86ffC14320930",name:"TestFTMToken4",symbol:"TFT4",decimals:18,logoURI:null},
            {chainId:4002,address:"0x773a8D2F9bDd79c42ACdf4eECf0f941BAEfC9451",name:"TestFTMToken5",symbol:"TFT5",decimals:18,logoURI:null}
        ],
        swaps: [],
        name: 'Fantom',
        symbol: 'fantom'
    },
    {
        chainId: 65,
        logo1: okex,
        logo2: Frame285_1,
        logo3: Crypto2,
        wallets: [Wallets[0]],
        tokens: [
            { name: "Okex", symbol:"OKX", logoURI:okex },
            { name: "Tether USD", symbol:"USDT", logoURI: usdt },
            { name: "USD Coin", symbol:"USDC", logoURI: usdc }
        ],
        swaps: [],
        name: 'Okex',
        symbol: 'okex'
    }
];

const Connected = () => {
    const { connector, chainId, active } = useWeb3React();
    if (active) {
        const activating = Wallets.find(data => (data.connector === connector));
        const activeChain = Chains.find(data => (data.chainId === chainId));
        return {
            activating: activating,
            activeChain: activeChain
        };
    } else {
        return {};
    }
};

export { Wallets, Chains, Connected, LPs };
