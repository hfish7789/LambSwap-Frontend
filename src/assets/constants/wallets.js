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

// import eth_tokens from '../token-json/eth_token.json'
// import bsc_tokens from '../token-json/bsc_token.json'
// import polygon_tokens from '../token-json/polygon_token.json'
// import arbitrum_tokens from '../token-json/arbitrum_token.json'
// import avalanche_tokens from '../token-json/avalanche_token.json'
// import optimism_tokens from '../token-json/optimism_token.json'
// import fantom_tokens from '../token-json/fantom_token.json'

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
        test_chainId: 97,
        chainId: 56,
        logo1: crypto7,
        logo2: Frame282,
        logo3: Crypto6,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: bsc_tokens.tokens,
        test_tokens: [
            { chainId: 97, address: "0xA1B71d61E071A6Cc277d13BEf2841CD8F363e017", name: "TestBSCToken1", symbol: "TBT1", decimals: 18, logoURI: null },
            { chainId: 97, address: "0x27C449c03D8776Bcc9fbe7E9e9c1b2aFC5D5B87f", name: "TestBSCToken2", symbol: "TBT2", decimals: 18, logoURI: null },
            { chainId: 97, address: "0x66712Cd82EE13eCaA7f2C8D9EC4DC0bC2f97ce25", name: "TestBSCToken3", symbol: "TBT3", decimals: 18, logoURI: null },
            { chainId: 97, address: "0xCd2cC03f07bA28180fE26Ae288CFAa30f089EeF8", name: "LmabSwapToken", symbol: "LST", decimals: 9, logoURI: null },
            { chainId: 97, address: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", name: "Binance USD", symbol: "BUSD", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xe9e7cea3dedca5984780bafc599bd69add087d56-bsc.png" },
        ],
        swaps: [],
        name: 'BSC Mainnet',
        symbol: 'bsc'
    },
    {
        // chainId: 4,
        chainId: 1,
        logo1: ETH,
        logo2: Frame281,
        logo3: Crypto5,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: eth_tokens.tokens,
        // [
        //     {chainId:4,address:"0x985Be8bB9Bc3421CdfD6fA40e6c8Ebfd84286681",name:"TestETHToken1",symbol:"TET1",decimals:18,logoURI:null},
        //     {chainId:4,address:"0x7F95D140E90de5ed610c2f67DCc12De18058B444",name:"TestETHToken2",symbol:"TET2",decimals:18,logoURI:null},
        //     {chainId:4,address:"0xbaf6600fDF66114717867fCC9d8E87bbc2ffC818",name:"TestETHToken3",symbol:"TET3",decimals:18,logoURI:null},
        // ],
        swaps: [],
        name: 'Ethereum',
        symbol: 'eth'
    },
    {
        test_chainId: 80001,
        chainId: 137,
        logo1: polygon,
        logo2: Frame283,
        logo3: Crypto,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: polygon_tokens.tokens,
        test_tokens: [
            { chainId: 80001, address: "0x98666E35D13968a2cdbdf98Cf3E92fD2a1256Aee", name: "TestPolyToken1", symbol: "TPT1", decimals: 18, logoURI: null },
            { chainId: 80001, address: "0x4cB6b11C5a71cE6E2C0Dc76279F68B74dDac4287", name: "TestPolyToken2", symbol: "TPT2", decimals: 18, logoURI: null },
            { chainId: 80001, address: "0xaA4FC897E1dd242386CC2Ba2F1258660CC2DFa11", name: "TestPolyToken3", symbol: "TPT3", decimals: 18, logoURI: null },
            { chainId: 80001, address: "0x18ffee6159E13108F873c5acb8D0977f3cCAE534", name: "LmabSwapToken", symbol: "LST", decimals: 9, logoURI: null },
            { chainId: 80001, address: "0xf8B7Eb9fC632434d614444C358aecA2AE0C2a706", name: "USD Coin", symbol: "USDC", decimals: 18, logoURI: 'https://assets.dex.guru/icons/0x2791bca1f2de4661ed88a30c99a7a9449aa84174-polygon.png' },
        ],
        swaps: [],
        name: 'Polygon Network',
        symbol: 'polygon'
    },
    {
        chainId: 42161,
        logo1: solana,
        logo2: Frame284,
        logo3: Crypto1,
        wallets: [Wallets[4]],
        tokens: [],
        swaps: [],
        name: 'Solana',
        symbol: 'sol'
    },
    {
        // chainId: 421611,
        chainId: 42161,
        logo1: Arbitrum,
        logo2: Frame285,
        logo3: Crypto8,
        wallets: [Wallets[0]],
        // tokens: arbitrum_tokens.tokens,
        tokens: [],
        swaps: [],
        name: 'Arbitrum',
        symbol: 'arbitrum'
    },
    {
        // chainId: 69,
        chainId: 10,
        logo1: optimism,
        logo2: Frame282_1,
        logo3: Crypto4,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: optimism_tokens.tokens,
        swaps: [],
        name: 'Optimism',
        symbol: 'optimism'
    },
    {
        // chainId: 43113,
        chainId: 43114,
        logo1: avalanche,
        logo2: Frame281_1,
        logo3: Crypto11,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: avalanche_tokens.tokens,
        // [
        //     {chainId:43113,address:"0xCB1deAB9A0a0B5e19BdC876bDb96542bACBb2367",name:"TestAvaxToken1",symbol:"TAVT1",decimals:18,logoURI:null},
        //     {chainId:43113,address:"0x3E685E032260F76067635Da49811D648d6C4735f",name:"TestAvaxToken2",symbol:"TAVT2",decimals:18,logoURI:null},
        //     {chainId:43113,address:"0x7977fb35253aeD9368fd90194881CaE8dcf44AF2",name:"TestAvaxToken3",symbol:"TAVT3",decimals:18,logoURI:null},
        // ],
        swaps: [],
        name: 'Avalanche',
        symbol: 'avalanche'
    },
    {
        // chainId: 4002,
        chainId: 250,
        logo1: fantom,
        logo2: Frame283_1,
        logo3: Crypto3,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: fantom_tokens.tokens,
        // [
        //     {chainId:4002,address:"0x8f86F66D7c5E7b73E6AcF2c4f82F37b0f533C0d9",name:"TestFTMToken1",symbol:"TFT1",decimals:18,logoURI:null},
        //     {chainId:4002,address:"0x0F605D0064e4A3609Adee6fc7CC21226CF4A0dd2",name:"TestFTMToken2",symbol:"TFT2",decimals:18,logoURI:null},
        //     {chainId:4002,address:"0x566c1295714141da69eAD53feE19B16B8Bc0A006",name:"TestFTMToken3",symbol:"TFT3",decimals:18,logoURI:null},
        // ],
        swaps: [],
        name: 'Fantom',
        symbol: 'fantom'
    },
    {
        // chainId: 65,
        chainId: 66,
        logo1: okex,
        logo2: Frame285_1,
        logo3: Crypto2,
        wallets: [Wallets[0]],
        tokens: [],
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
