export const bridge_data = {
    address: "0x00b93851e3135663AAeC351555EddEE5B01325e6",
    abi: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "_chainId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "_swapChianId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "_lockProxy",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_CCMP",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_wbnb",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "_swapProxyHash",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "AddLiquidityEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "LockEvent",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Paused",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "RemoveLiquidityEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "fromAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "SwapEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "Unpaused",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "WBNB",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "add_liquidity",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "name": "assetInPool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "asset1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "asset2",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "asset3",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "poolId",
                    "type": "uint64"
                }
            ],
            "name": "bind3Asset",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "fromAssetHash",
                    "type": "bytes"
                },
                {
                    "internalType": "uint64",
                    "name": "poolId",
                    "type": "uint64"
                }
            ],
            "name": "bindAssetAndPool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "chainId",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "extractFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "feeCollector",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                }
            ],
            "name": "getBalanceFor",
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
            "name": "isOwner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lockProxyAddress",
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
            "name": "managerProxyContract",
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
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "name": "poolTokenMap",
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
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "poolId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "poolTokenAddress",
                    "type": "address"
                }
            ],
            "name": "registerPool",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "poolId",
                    "type": "uint64"
                },
                {
                    "internalType": "address",
                    "name": "poolTokenAddress",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "asset1",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "asset2",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "asset3",
                    "type": "bytes"
                }
            ],
            "name": "registerPoolWith3Assets",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "remove_liquidity",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
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
                    "internalType": "address",
                    "name": "collector",
                    "type": "address"
                }
            ],
            "name": "setFeeCollector",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_lockProxy",
                    "type": "address"
                }
            ],
            "name": "setLockProxy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "ethCCMProxyAddr",
                    "type": "address"
                }
            ],
            "name": "setManagerProxy",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "_swapChianId",
                    "type": "uint64"
                }
            ],
            "name": "setSwapChainId",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "swapProxyAddr",
                    "type": "bytes"
                }
            ],
            "name": "setSwapProxyHash",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_wbnb",
                    "type": "address"
                }
            ],
            "name": "setWBNB",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "fromAssetHash",
                    "type": "address"
                },
                {
                    "internalType": "uint64",
                    "name": "toPoolId",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "toChainId",
                    "type": "uint64"
                },
                {
                    "internalType": "bytes",
                    "name": "toAssetHash",
                    "type": "bytes"
                },
                {
                    "internalType": "bytes",
                    "name": "toAddress",
                    "type": "bytes"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minOutAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "fee",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "swap",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "swapChainId",
            "outputs": [
                {
                    "internalType": "uint64",
                    "name": "",
                    "type": "uint64"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "swapProxyHash",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
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
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
}
