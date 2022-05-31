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
// require('@solana/wallet-adapter-react-ui/styles.css');
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
import Crypto2 from '../img/common/crypto-2.png';
import Crypto8 from '../img/common/crypto-8.png';
import usdt from '../img/common/usdt.png';
import usdc from '../img/common/usdc.png';
import btc from '../img/common/btc 1.png';
import Icon2 from '../../assets/img/common/Icon2.png';
import BUSD_I from '../../assets/img/common/crypto14.png';
import USDC_I from '../../assets/img/common/usdc.png';
// import weth from '../img/common/weth2.png';

// import eth_tokens from '../token-json/eth_token.json'
// import bsc_tokens from '../token-json/bsc_token.json'
// import polygon_tokens from '../token-json/polygon_token.json'
// import arbitrum_tokens from '../token-json/arbitrum_token.json'
// import avalanche_tokens from '../token-json/avalanche_token.json'
// import optimism_tokens from '../token-json/optimism_token.json'
// import fantom_tokens from '../token-json/fantom_token.json'

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
        bridge_tokens: [
            { chainId: 56, address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", name: "WETH", symbol: "ETH", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x2170ed0880ac9a755fd29b2688956bd959f933f8-bsc.png", _num: [0] },
            { chainId: 56, address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", name: "BUSD Token", symbol: "BUSD", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xe9e7cea3dedca5984780bafc599bd69add087d56-bsc.png", _num: [6] },
            { chainId: 56, address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", name: "BTCB Token", symbol: "BTCB", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c-bsc.png", _num: [1] },
            { chainId: 56, address: "0x55d398326f99059fF775485246999027B3197955", name: "Tether USD", symbol: "USDT", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x55d398326f99059ff775485246999027b3197955-bsc.png", _num: [3, 5] },
            { chainId: 56, address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", name: "USDC Token", symbol: "USDC", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d-bsc.png", _num: [2, 4] }
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
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: eth_tokens.tokens,
        // [
        //     {chainId:4,address:"0x985Be8bB9Bc3421CdfD6fA40e6c8Ebfd84286681",name:"TestETHToken1",symbol:"TET1",decimals:18,logoURI:null},
        //     {chainId:4,address:"0x7F95D140E90de5ed610c2f67DCc12De18058B444",name:"TestETHToken2",symbol:"TET2",decimals:18,logoURI:null},
        //     {chainId:4,address:"0xbaf6600fDF66114717867fCC9d8E87bbc2ffC818",name:"TestETHToken3",symbol:"TET3",decimals:18,logoURI:null},
        // ],
        bridge_tokens: [
            { chainId: 1, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", name: "WETH", symbol: "WETH", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2-eth.png", _num: [0] },
            { chainId: 1, address: "0xdac17f958d2ee523a2206206994597c13d831ec7", name: "USDTethererc20", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xdac17f958d2ee523a2206206994597c13d831ec7-eth.png", _num: [3, 5, 6] },
            { chainId: 1, address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", name: "USDCoin", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth.png", _num: [2, 4] },
            { chainId: 1, address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", name: "Wrapped BTC", symbol: "WBTC", decimals: 8, logoURI: "https://assets.dex.guru/icons/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599-eth.png", _num: [1] }
        ],
        swaps: [],
        name: 'Ethereum',
        symbol: 'eth'
    },
    {
        test_chainId: 80001,
        chainId: 137,
        logo1: polygon,
        logo2: Frame283,
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
        bridge_tokens: [
            { chainId: 137, address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", name: "USD Coin (PoS)", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x2791bca1f2de4661ed88a30c99a7a9449aa84174-polygon.png", _num: [2, 4] },
            { chainId: 137, address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", name: "(PoS) Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xc2132d05d31c914a87c6611c10748aeb04b58e8f-polygon.png", _num: [3, 5] },
        ],
        swaps: [],
        name: 'Polygon Network',
        symbol: 'polygon'
    },
    {
        chainId: 42161,
        logo1: solana,
        logo2: Frame284,
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
        wallets: [Wallets[0]],
        // tokens: arbitrum_tokens.tokens,
        tokens: [],
        bridge_tokens: [
            { chainId: 42161, address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", name: "Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9-arbitrum.png", _num: [3, 5] },
            { chainId: 42161, address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", name: "USD Coin (Arb1)", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8-arbitrum.png", _num: [2, 4] },
        ],
        swaps: [],
        name: 'Arbitrum',
        symbol: 'arbitrum'
    },
    {
        // chainId: 69,
        chainId: 10,
        logo1: optimism,
        logo2: Frame282_1,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: optimism_tokens.tokens,
        bridge_tokens: [
            { chainId: 10, address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58", name: "Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58-optimism.png", _num: [3, 5] },
            { chainId: 10, address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607", name: "USD Coin", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x7f5c764cbc14f9669b88837ca1490cca17c31607-optimism.png", _num: [2, 4] }
        ],
        swaps: [],
        name: 'Optimism',
        symbol: 'optimism'
    },
    {
        // chainId: 43113,
        chainId: 43114,
        logo1: avalanche,
        logo2: Frame281_1,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: avalanche_tokens.tokens,
        // [
        //     {chainId:43113,address:"0xCB1deAB9A0a0B5e19BdC876bDb96542bACBb2367",name:"TestAvaxToken1",symbol:"TAVT1",decimals:18,logoURI:null},
        //     {chainId:43113,address:"0x3E685E032260F76067635Da49811D648d6C4735f",name:"TestAvaxToken2",symbol:"TAVT2",decimals:18,logoURI:null},
        //     {chainId:43113,address:"0x7977fb35253aeD9368fd90194881CaE8dcf44AF2",name:"TestAvaxToken3",symbol:"TAVT3",decimals:18,logoURI:null},
        // ],
        bridge_tokens: [
            { chainId: 43114, address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", name: "USD Coin", symbol: "USDC.e", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664-avalanche.png", _num: [2, 4] },
        ],
        swaps: [],
        name: 'Avalanche',
        symbol: 'avalanche'
    },
    {
        // chainId: 4002,
        chainId: 250,
        logo1: fantom,
        logo2: Frame283_1,
        wallets: [Wallets[0]],
        tokens: [],
        // tokens: fantom_tokens.tokens,
        // [
        //     {chainId:4002,address:"0x8f86F66D7c5E7b73E6AcF2c4f82F37b0f533C0d9",name:"TestFTMToken1",symbol:"TFT1",decimals:18,logoURI:null},
        //     {chainId:4002,address:"0x0F605D0064e4A3609Adee6fc7CC21226CF4A0dd2",name:"TestFTMToken2",symbol:"TFT2",decimals:18,logoURI:null},
        //     {chainId:4002,address:"0x566c1295714141da69eAD53feE19B16B8Bc0A006",name:"TestFTMToken3",symbol:"TFT3",decimals:18,logoURI:null},
        // ],]
        bridge_tokens: [
            { chainId: 250, address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", name: "Frapped USDT", symbol: "fUSDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x049d68029688eabf473097a2fc38ef61633a3c7a-fantom.png", _num: [3, 5] },
        ],
        swaps: [],
        name: 'Fantom',
        symbol: 'fantom'
    },
    {
        // chainId: 65,
        chainId: 66,
        logo1: okex,
        logo2: Frame285_1,
        wallets: [Wallets[0]],
        tokens: [],
        bridge_tokens: [
            { chainId: 66, address: "0x382bB369d343125BfB2117af9c149795C6C65C50", name: "USDT", symbol: "USDT", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9-arbitrum.png", _num: [3, 5] },
        ],
        swaps: [],
        name: 'Okex',
        symbol: 'okex'
    }
];

const StakingToken = [
    {
        chainId: 56,
        test_chainId: 97,
        test_LP_token: "0x77c3594e8acA9206F409A576CD976Ac4bc09358B",
        test_LST: "0xCd2cC03f07bA28180fE26Ae288CFAa30f089EeF8",
        test_stakingContract: "0xEa8A38C4eBA18f378763A80a4f0ee6D8E11061Ef",
        token1_logo: Icon2,
        token2_logo: BUSD_I,
        stakingABI: [
            {
                "inputs": [],
                "name": "claimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "collect",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_LambSwapToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startStakingBlockIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startUnstakeBlockIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startClaimBlockIndex",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": true,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes4",
                        "name": "sig",
                        "type": "bytes4"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "caller",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "LOG_CALL",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "profit",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_CLAIM_PROFIT",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_STAKE",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_UNSTAKE",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "pauseClaimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pauseStaking",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pauseUnstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "sharePerBlock",
                        "type": "uint256"
                    }
                ],
                "name": "setSharePerBlock",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_token",
                        "type": "address"
                    }
                ],
                "name": "setStakingToke",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_startClaimBlockIndex",
                        "type": "uint256"
                    }
                ],
                "name": "setStartClaimBlockIndex",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_startUnstakeBlockIndex",
                        "type": "uint256"
                    }
                ],
                "name": "setStartUnstakeBlockIndex",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "stake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseClaimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseStaking",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseUnstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "unstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getSharePerBlock",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    }
                ],
                "name": "getStakingAmount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    }
                ],
                "name": "getTotalProfit",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "LambSwapToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ONE",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "StakingToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startClaimBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startStakingBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startUnstakeBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalStaked",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    },
    {
        chainId: 137,
        test_chainId: 80001,
        test_LP_token: "0x0c7E2873F8ca1f8D3B38C1056cd2CD509d7e63c9",
        test_LST: "0x18ffee6159E13108F873c5acb8D0977f3cCAE534",
        test_stakingContract: "0x9de9B48c9CE1862f5c141b157C80aC211A3d24b4",
        token1_logo: Icon2,
        token2_logo: USDC_I,
        stakingABI: [
            {
                "inputs": [],
                "name": "claimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "collect",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_LambSwapToken",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startStakingBlockIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startUnstakeBlockIndex",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_startClaimBlockIndex",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": true,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes4",
                        "name": "sig",
                        "type": "bytes4"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "caller",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "LOG_CALL",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "profit",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_CLAIM_PROFIT",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_STAKE",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "withdrawAmount",
                        "type": "uint256"
                    }
                ],
                "name": "LOG_UNSTAKE",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "pauseClaimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pauseStaking",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "pauseUnstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "sharePerBlock",
                        "type": "uint256"
                    }
                ],
                "name": "setSharePerBlock",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_token",
                        "type": "address"
                    }
                ],
                "name": "setStakingToke",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_startClaimBlockIndex",
                        "type": "uint256"
                    }
                ],
                "name": "setStartClaimBlockIndex",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_startUnstakeBlockIndex",
                        "type": "uint256"
                    }
                ],
                "name": "setStartUnstakeBlockIndex",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "stake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseClaimProfit",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseStaking",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "unpauseUnstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "unstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getSharePerBlock",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    }
                ],
                "name": "getStakingAmount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "staker",
                        "type": "address"
                    }
                ],
                "name": "getTotalProfit",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "LambSwapToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "ONE",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "StakingToken",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startClaimBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startStakingBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "startUnstakeBlockIndex",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalStaked",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
    }
];

const CrossPool = [
    {
        name: "ETH-Pool",
        logo1: Crypto5,
        logo2: ETH,
        poolId: 2,
        token_pair: [
            { chainId: 1, address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", name: "WETH", symbol: "WETH", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2-eth.png" },
            { chainId: 56, address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", name: "WETH", symbol: "ETH", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x2170ed0880ac9a755fd29b2688956bd959f933f8-bsc.png" }
        ]
    },
    {
        name: "BTC-Pool",
        logo1: Crypto6,
        logo2: btc,
        poolId: 4,
        token_pair: [
            { chainId: 1, address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", name: "Wrapped BTC", symbol: "WBTC", decimals: 8, logoURI: "https://assets.dex.guru/icons/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599-eth.png" },
            { chainId: 56, address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", name: "BTCB Token", symbol: "BTCB", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c-bsc.png" }
        ]
    },
    {
        name: "USDC-Pool",
        logo1: Crypto,
        logo2: usdc,
        poolId: 5,
        token_pair: [
            { chainId: 1, address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", name: "USDCoin", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth.png" },
            { chainId: 56, address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", name: "USDC Token", symbol: "USDC", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d-bsc.png" },
            { chainId: 137, address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", name: "USD Coin (PoS)", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x2791bca1f2de4661ed88a30c99a7a9449aa84174-polygon.png" }
        ]
    },
    {
        name: "USDT-Pool",
        logo1: Crypto8,
        logo2: usdt,
        poolId: 7,
        token_pair: [
            { chainId: 1, address: "0xdac17f958d2ee523a2206206994597c13d831ec7", name: "USDTethererc20", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xdac17f958d2ee523a2206206994597c13d831ec7-eth.png" },
            { chainId: 56, address: "0x55d398326f99059fF775485246999027B3197955", name: "Tether USD", symbol: "USDT", decimals: 18, logoURI: "https://assets.dex.guru/icons/0x55d398326f99059ff775485246999027b3197955-bsc.png" },
            { chainId: 137, address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", name: "(PoS) Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xc2132d05d31c914a87c6611c10748aeb04b58e8f-polygon.png" },
            { chainId: 42161, address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9", name: "Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9-arbitrum.png" }
        ]
    },
    {
        name: "USDC-Pool",
        logo1: Crypto11,
        logo2: usdc,
        poolId: 8,
        token_pair: [
            { chainId: 1, address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", name: "USD Coin", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48-eth.png" },
            { chainId: 42161, address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", name: "USD Coin (Arb1)", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8-arbitrum.png" },
            { chainId: 43114, address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", name: "USD Coin", symbol: "USDC.e", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664-avalanche.png" },
            { chainId: 10, address: "0x7f5c764cbc14f9669b88837ca1490cca17c31607", name: "USD Coin", symbol: "USDC", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x7f5c764cbc14f9669b88837ca1490cca17c31607-optimism.png" }
        ]
    },
    {
        name: "USDT-Pool",
        logo1: Crypto2,
        logo2: usdt,
        poolId: 10,
        token_pair: [
            { chainId: 1, address: "0xdac17f958d2ee523a2206206994597c13d831ec7", name: "USDTethererc20", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xdac17f958d2ee523a2206206994597c13d831ec7-eth.png" },
            { chainId: 10, address: "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58", name: "Tether USD", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58-optimism.png" },
            { chainId: 250, address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664", name: "Frapped USDT", symbol: "fUSDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0x049d68029688eabf473097a2fc38ef61633a3c7a-fantom.png" },
            { chainId: 66, address: "0x382bB369d343125BfB2117af9c149795C6C65C50", name: "USDT", symbol: "USDT", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9-arbitrum.png" }
        ]
    },
    {
        name: "LST-Pool",
        logo1: Crypto5,
        logo2: Icon2,
        poolId: 1,
        token_pair: [
            { chainId: 1, address: "0xdac17f958d2ee523a2206206994597c13d831ec7", name: "USDTethererc20", symbol: "USDT", decimals: 6, logoURI: "https://assets.dex.guru/icons/0xdac17f958d2ee523a2206206994597c13d831ec7-eth.png" },
            { chainId: 56, address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", name: "BUSD Token", symbol: "BUSD", decimals: 18, logoURI: "https://assets.dex.guru/icons/0xe9e7cea3dedca5984780bafc599bd69add087d56-bsc.png" }
        ]
    },
];

const CrossPoolColor = {
    "1": { bg: "rgba(52, 241, 75, 0.5)", text: "#34f14b", group_name: "ERC-20", logo: ETH },
    "56": { bg: "rgb(240, 185, 11, 0.5)", text: "#f0b90b", group_name: "BEP-20", logo: crypto7 },
    "137": { bg: "rgb(130, 71, 229, 0.5)", text: "#8247e5", group_name: "Polygon", logo: polygon },
    "138": { bg: "rgb(0, 140, 214, 0.5)", text: "#008cd6", group_name: "Solana", logo: solana },
    "42161": { bg: "rgb(150, 190, 220, 0.5)", text: "#96bedc", group_name: "Arbitrum", logo: Arbitrum },
    "10": { bg: "rgb(69, 159, 251, 0.5)", text: "#459ffb", group_name: "Optimism", logo: optimism },
    "43114": { bg: "rgb(69, 159, 251, 0.5)", text: "#459ffb", group_name: "Avalanche", logo: avalanche },
    "250": { bg: "rgb(69, 159, 251, 0.5)", text: "#459ffb", group_name: "Fantom", logo: fantom },
    "66": { bg: "rgb(69, 159, 251, 0.5)", text: "#459ffb", group_name: "Okex", logo: okex }
}

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

export { Wallets, Chains, Connected, LPs, StakingToken, CrossPool, CrossPoolColor };
