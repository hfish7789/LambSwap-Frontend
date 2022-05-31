export const Factory_address = [
  {
    test_chainId: 97,
    chainId: 56,
    test_dex:
    {
      name: 'LambSwap', address: '0x4a020b14d3667F5CD6b4AaEBDf09eDCB6fd22cB5', abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeToSetter",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "token0",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "token1",
              "type": "address"
            },
            { 
              "indexed": false,
              "internalType": "address",
              "name": "pair",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "PairCreated",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "INIT_CODE_PAIR_HASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "allPairs",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "allPairsLength",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            }
          ],
          "name": "createPair",
          "outputs": [
            {
              "internalType": "address",
              "name": "pair",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "feeTo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "feeToSetter",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "getPair",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeTo",
              "type": "address"
            }
          ],
          "name": "setFeeTo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeToSetter",
              "type": "address"
            }
          ],
          "name": "setFeeToSetter",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    dexs: [

      {
        name: 'LambSwap', address: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'PancakeSwap', address: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'ApeSwap', address: '0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'Biswap', address: '0x858E3312ed3A876947EA49d572A7C42DE08af7EE', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_pair",
                "type": "address"
              },
              {
                "internalType": "uint8",
                "name": "_devFee",
                "type": "uint8"
              }
            ],
            "name": "setDevFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_pair",
                "type": "address"
              },
              {
                "internalType": "uint32",
                "name": "_swapFee",
                "type": "uint32"
              }
            ],
            "name": "setSwapFee",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
    ]
  },
  {
    // chainId: 4,
    chainId: 1,
    dexs: [
      {
        name: 'LambSwap', address: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'UniSwap', address: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      // { name: 'lambswap', address: '0x773a8D2F9bDd79c42ACdf4eECf0f941BAEfC9451' },
      // { name: 'lambswap', address: '0x773a8D2F9bDd79c42ACdf4eECf0f941BAEfC9451' },
    ]
  },
  {
    test_chainId: 80001,
    chainId: 137,
    test_dex:
    {
      name: 'LambSwap', address: '0xb423f6fC9fA1933B8C0bc2801CB16832541Ab57E', abi: [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeToSetter",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "token0",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "token1",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "pair",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "PairCreated",
          "type": "event"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "INIT_CODE_PAIR_HASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "allPairs",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "allPairsLength",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenA",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "tokenB",
              "type": "address"
            }
          ],
          "name": "createPair",
          "outputs": [
            {
              "internalType": "address",
              "name": "pair",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "feeTo",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "feeToSetter",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "getPair",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeTo",
              "type": "address"
            }
          ],
          "name": "setFeeTo",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "address",
              "name": "_feeToSetter",
              "type": "address"
            }
          ],
          "name": "setFeeToSetter",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
    },
    dexs: [
      {
        name: 'LambSwap', address: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'QuickSwap', address: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'DfynSwap', address: '0xE7Fb3e833eFE5F9c441105EB65Ef8b261266423B', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "feeTo",
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
            "name": "feeToSetter",
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
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
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
            "name": "migrator",
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
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_migrator",
                "type": "address"
              }
            ],
            "name": "setMigrator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      // {
      //   name: 'KyberSwap', address: '0x5F1fe642060B5B9658C15721Ea22E982643c095c', abi: [
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "address",
      //           "name": "_feeToSetter",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "nonpayable",
      //       "type": "constructor"
      //     },
      //     {
      //       "anonymous": false,
      //       "inputs": [
      //         {
      //           "indexed": true,
      //           "internalType": "contract IERC20",
      //           "name": "token0",
      //           "type": "address"
      //         },
      //         {
      //           "indexed": true,
      //           "internalType": "contract IERC20",
      //           "name": "token1",
      //           "type": "address"
      //         },
      //         {
      //           "indexed": false,
      //           "internalType": "address",
      //           "name": "pool",
      //           "type": "address"
      //         },
      //         {
      //           "indexed": false,
      //           "internalType": "uint32",
      //           "name": "ampBps",
      //           "type": "uint32"
      //         },
      //         {
      //           "indexed": false,
      //           "internalType": "uint256",
      //           "name": "totalPool",
      //           "type": "uint256"
      //         }
      //       ],
      //       "name": "PoolCreated",
      //       "type": "event"
      //     },
      //     {
      //       "anonymous": false,
      //       "inputs": [
      //         {
      //           "indexed": false,
      //           "internalType": "address",
      //           "name": "feeTo",
      //           "type": "address"
      //         },
      //         {
      //           "indexed": false,
      //           "internalType": "uint16",
      //           "name": "governmentFeeBps",
      //           "type": "uint16"
      //         }
      //       ],
      //       "name": "SetFeeConfiguration",
      //       "type": "event"
      //     },
      //     {
      //       "anonymous": false,
      //       "inputs": [
      //         {
      //           "indexed": false,
      //           "internalType": "address",
      //           "name": "feeToSetter",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "SetFeeToSetter",
      //       "type": "event"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "uint256",
      //           "name": "",
      //           "type": "uint256"
      //         }
      //       ],
      //       "name": "allPools",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [],
      //       "name": "allPoolsLength",
      //       "outputs": [
      //         {
      //           "internalType": "uint256",
      //           "name": "",
      //           "type": "uint256"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "tokenA",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "tokenB",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "uint32",
      //           "name": "ampBps",
      //           "type": "uint32"
      //         }
      //       ],
      //       "name": "createPool",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "pool",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "nonpayable",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [],
      //       "name": "feeToSetter",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [],
      //       "name": "getFeeConfiguration",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "_feeTo",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "uint16",
      //           "name": "_governmentFeeBps",
      //           "type": "uint16"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token0",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token1",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "uint256",
      //           "name": "index",
      //           "type": "uint256"
      //         }
      //       ],
      //       "name": "getPoolAtIndex",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "pool",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token0",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token1",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "getPools",
      //       "outputs": [
      //         {
      //           "internalType": "address[]",
      //           "name": "_tokenPools",
      //           "type": "address[]"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token0",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token1",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "getPoolsLength",
      //       "outputs": [
      //         {
      //           "internalType": "uint256",
      //           "name": "",
      //           "type": "uint256"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "getUnamplifiedPool",
      //       "outputs": [
      //         {
      //           "internalType": "address",
      //           "name": "",
      //           "type": "address"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token0",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "contract IERC20",
      //           "name": "token1",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "address",
      //           "name": "pool",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "isPool",
      //       "outputs": [
      //         {
      //           "internalType": "bool",
      //           "name": "",
      //           "type": "bool"
      //         }
      //       ],
      //       "stateMutability": "view",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "address",
      //           "name": "_feeTo",
      //           "type": "address"
      //         },
      //         {
      //           "internalType": "uint16",
      //           "name": "_governmentFeeBps",
      //           "type": "uint16"
      //         }
      //       ],
      //       "name": "setFeeConfiguration",
      //       "outputs": [],
      //       "stateMutability": "nonpayable",
      //       "type": "function"
      //     },
      //     {
      //       "inputs": [
      //         {
      //           "internalType": "address",
      //           "name": "_feeToSetter",
      //           "type": "address"
      //         }
      //       ],
      //       "name": "setFeeToSetter",
      //       "outputs": [],
      //       "stateMutability": "nonpayable",
      //       "type": "function"
      //     }
      //   ]
      // },
    ]
  },
  {
    chainId: 138,
    dexs: [
      { name: 'LambSwap', address: '0x62998513E9F40Ec32C445666b15531b22642c882' },
    ]
  },
  {
    // chainId: 421611,
    chainId: 42161,
    dexs: [
      { name: 'LambSwap', address: '0x62998513E9F40Ec32C445666b15531b22642c882' },
    ]
  },
  {
    // chainId: 69,
    chainId: 10,
    dexs: [
      { name: 'LambSwap', address: '0x62998513E9F40Ec32C445666b15531b22642c882' },
    ]
  },
  {
    // chainId: 43113,
    chainId: 43114,
    dexs: [
      // { name: 'lambswap', address: '0x2423C9a8B910484Be622FdA3f9B86ffC14320930' },
      {
        name: 'LambSwap', address: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "feeTo",
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
            "name": "feeToSetter",
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
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
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
            "name": "migrator",
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
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_migrator",
                "type": "address"
              }
            ],
            "name": "setMigrator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'TraderJoeSwap', address: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "feeTo",
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
            "name": "feeToSetter",
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
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
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
            "name": "migrator",
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
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_migrator",
                "type": "address"
              }
            ],
            "name": "setMigrator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'PangolinSwap', address: '0xefa94DE7a4656D787667C749f7E1223D71E9FD88', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
    ]
  },
  {
    // chainId: 4002,
    chainId: 250,
    dexs: [
      // { name: 'lambswap', address: '0x014562502f961ED71b5123679a87300B708a5Ad9' },
      {
        name: 'LambSwap', address: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "feeTo",
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
            "name": "feeToSetter",
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
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
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
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'SpookySwap', address: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3', abi: [
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
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
            "name": "allPairsLength",
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
                "name": "tokenA",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "feeTo",
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
            "name": "feeToSetter",
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
                "name": "",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
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
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
    ]
  },
  {
    // chainId: 65,
    chainId: 66,
    dexs: [
      // { name: 'lambswap', address: '0x62998513E9F40Ec32C445666b15531b22642c882' },
      {
        name: 'LambSwap', address: '0xd654CbF99F2907F06c88399AE123606121247D5C', abi: [
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "payable": false,
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "initCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "migrator",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "sortTokens",
            "outputs": [
              {
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token1",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "pairFor",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "getSalt",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_migrator",
                "type": "address"
              }
            ],
            "name": "setMigrator",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'JSwap', address: '0xd654CbF99F2907F06c88399AE123606121247D5C', abi: [
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "payable": false,
            "type": "event"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "initCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "migrator",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "pairCodeHash",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "sortTokens",
            "outputs": [
              {
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "token1",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "pairFor",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [],
            "name": "getSalt",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_migrator",
                "type": "address"
              }
            ],
            "name": "setMigrator",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
      {
        name: 'CherrySwap', address: '0x709102921812B3276A65092Fe79eDfc76c4D4AFe', abi: [
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pair",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "PairCreated",
            "payable": false,
            "type": "event"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "INIT_CODE_PAIR_HASH",
            "outputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "allPairs",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeTo",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "feeToSetter",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "getPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": true,
            "inputs": [],
            "name": "allPairsLength",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
              }
            ],
            "name": "createPair",
            "outputs": [
              {
                "internalType": "address",
                "name": "pair",
                "type": "address"
              }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeTo",
                "type": "address"
              }
            ],
            "name": "setFeeTo",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "constant": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "address",
                "name": "_feeToSetter",
                "type": "address"
              }
            ],
            "name": "setFeeToSetter",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ]
      },
    ]
  },
];