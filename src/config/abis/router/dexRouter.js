export const Router_address = [
	{
		test_chainId: 97,
		chainId: 56,
		test_dex:
		{
			name: 'LambSwap', address: '0x62998513E9F40Ec32C445666b15531b22642c882', abi: [
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "_factory",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "_WETH",
							"type": "address"
						}
					],
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"inputs": [],
					"name": "WETH",
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
							"name": "tokenA",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "tokenB",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amountADesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBDesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "addLiquidity",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "amountTokenDesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "addLiquidityETH",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "factory",
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
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveOut",
							"type": "uint256"
						}
					],
					"name": "getAmountIn",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveOut",
							"type": "uint256"
						}
					],
					"name": "getAmountOut",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						}
					],
					"name": "getAmountsIn",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						}
					],
					"name": "getAmountsOut",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveB",
							"type": "uint256"
						}
					],
					"name": "quote",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
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
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidity",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidityETH",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityETHWithPermit",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
					"stateMutability": "nonpayable",
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
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityWithPermit",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapETHForExactTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactETHForTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForETH",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountInMax",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapTokensForExactETH",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountInMax",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapTokensForExactTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"stateMutability": "payable",
					"type": "receive"
				}
			]
		},
		dexs: [
			{
				name: 'LambSwap', address: '0x10ED43C718714eb63d5aA57B78B54704E256024E', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'PancakeSwap', address: '0x10ED43C718714eb63d5aA57B78B54704E256024E', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'ApeSwap', address: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'BiSwap', address: '0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
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
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "swapFee",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "swapFee",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "account",
								"type": "address"
							}
						],
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
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "address",
								"name": "_swapFeeReward",
								"type": "address"
							}
						],
						"name": "setSwapFeeReward",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "swapFeeReward",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
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
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
		]
	},
	{
		// chainId: 4,
		chainId: 1,
		dexs: [
			// { name: 'LambSwap', address: '0x014562502f961ED71b5123679a87300B708a5Ad9' },
			{
				name: 'LambSwap', address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'UniSwap', address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			// { name: 'LambSwap', address: '0x014562502f961ED71b5123679a87300B708a5Ad9' },
			// { name: 'LambSwap', address: '0x014562502f961ED71b5123679a87300B708a5Ad9' },
		]
	},
	{
		test_chainId: 80001,
		chainId: 137,
		test_dex:
		{
			name: 'LambSwap', address: '0xC689aaB3297a337311014F0e71d129Fe73d1Dd0C', abi: [
				{
					"inputs": [
						{
							"internalType": "address",
							"name": "_factory",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "_WETH",
							"type": "address"
						}
					],
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"inputs": [],
					"name": "WETH",
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
							"name": "tokenA",
							"type": "address"
						},
						{
							"internalType": "address",
							"name": "tokenB",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "amountADesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBDesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "addLiquidity",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "amountTokenDesired",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "addLiquidityETH",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [],
					"name": "factory",
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
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveOut",
							"type": "uint256"
						}
					],
					"name": "getAmountIn",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveOut",
							"type": "uint256"
						}
					],
					"name": "getAmountOut",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						}
					],
					"name": "getAmountsIn",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						}
					],
					"name": "getAmountsOut",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "view",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "reserveB",
							"type": "uint256"
						}
					],
					"name": "quote",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
					"stateMutability": "pure",
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
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidity",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidityETH",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityETHWithPermit",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountToken",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
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
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountTokenMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountETHMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountETH",
							"type": "uint256"
						}
					],
					"stateMutability": "nonpayable",
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
						},
						{
							"internalType": "uint256",
							"name": "liquidity",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountAMin",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountBMin",
							"type": "uint256"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "approveMax",
							"type": "bool"
						},
						{
							"internalType": "uint8",
							"name": "v",
							"type": "uint8"
						},
						{
							"internalType": "bytes32",
							"name": "r",
							"type": "bytes32"
						},
						{
							"internalType": "bytes32",
							"name": "s",
							"type": "bytes32"
						}
					],
					"name": "removeLiquidityWithPermit",
					"outputs": [
						{
							"internalType": "uint256",
							"name": "amountA",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountB",
							"type": "uint256"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapETHForExactTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactETHForTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "payable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForETH",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountIn",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountOutMin",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
					"outputs": [],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountInMax",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapTokensForExactETH",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [
						{
							"internalType": "uint256",
							"name": "amountOut",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "amountInMax",
							"type": "uint256"
						},
						{
							"internalType": "address[]",
							"name": "path",
							"type": "address[]"
						},
						{
							"internalType": "address",
							"name": "to",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "deadline",
							"type": "uint256"
						}
					],
					"name": "swapTokensForExactTokens",
					"outputs": [
						{
							"internalType": "uint256[]",
							"name": "amounts",
							"type": "uint256[]"
						}
					],
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"stateMutability": "payable",
					"type": "receive"
				}
			]
		},
		dexs: [
			{
				name: 'LambSwap', address: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'QuickSwap', address: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'DfynSwap', address: '0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
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
								"indexed": false,
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address payable",
								"name": "relayerAddress",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "bytes",
								"name": "functionSignature",
								"type": "bytes"
							}
						],
						"name": "MetaTransactionExecuted",
						"type": "event"
					},
					{
						"inputs": [],
						"name": "ERC712_VERSION",
						"outputs": [
							{
								"internalType": "string",
								"name": "",
								"type": "string"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "userAddress",
								"type": "address"
							},
							{
								"internalType": "bytes",
								"name": "functionSignature",
								"type": "bytes"
							},
							{
								"internalType": "bytes32",
								"name": "sigR",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "sigS",
								"type": "bytes32"
							},
							{
								"internalType": "uint8",
								"name": "sigV",
								"type": "uint8"
							}
						],
						"name": "executeMetaTransaction",
						"outputs": [
							{
								"internalType": "bytes",
								"name": "",
								"type": "bytes"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "getChainId",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "getDomainSeperator",
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
								"internalType": "address",
								"name": "user",
								"type": "address"
							}
						],
						"name": "getNonce",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "nonce",
								"type": "uint256"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			// {
			// 	name: 'KyberSwap', address: '0x546C79662E028B661dFB4767664d0273184E4dD1', abi: [
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "address",
			// 					"name": "_factory",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "contract IWETH",
			// 					"name": "_weth",
			// 					"type": "address"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "constructor"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenA",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenB",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountADesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBDesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountAMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256[2]",
			// 					"name": "vReserveRatioBounds",
			// 					"type": "uint256[2]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "addLiquidity",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountB",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenDesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256[2]",
			// 					"name": "vReserveRatioBounds",
			// 					"type": "uint256[2]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "addLiquidityETH",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountToken",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "payable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenA",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenB",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint32",
			// 					"name": "ampBps",
			// 					"type": "uint32"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountADesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBDesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountAMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "addLiquidityNewPool",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountB",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint32",
			// 					"name": "ampBps",
			// 					"type": "uint32"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenDesired",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "addLiquidityNewPoolETH",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountToken",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "payable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [],
			// 			"name": "factory",
			// 			"outputs": [
			// 				{
			// 					"internalType": "address",
			// 					"name": "",
			// 					"type": "address"
			// 				}
			// 			],
			// 			"stateMutability": "view",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOut",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				}
			// 			],
			// 			"name": "getAmountsIn",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "view",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountIn",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				}
			// 			],
			// 			"name": "getAmountsOut",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "view",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "reserveA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "reserveB",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "quote",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountB",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "pure",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenA",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenB",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountAMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "removeLiquidity",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountB",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "removeLiquidityETH",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountToken",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "bool",
			// 					"name": "approveMax",
			// 					"type": "bool"
			// 				},
			// 				{
			// 					"internalType": "uint8",
			// 					"name": "v",
			// 					"type": "uint8"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "r",
			// 					"type": "bytes32"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "s",
			// 					"type": "bytes32"
			// 				}
			// 			],
			// 			"name": "removeLiquidityETHWithPermit",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountToken",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "token",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountTokenMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETHMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "bool",
			// 					"name": "approveMax",
			// 					"type": "bool"
			// 				},
			// 				{
			// 					"internalType": "uint8",
			// 					"name": "v",
			// 					"type": "uint8"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "r",
			// 					"type": "bytes32"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "s",
			// 					"type": "bytes32"
			// 				}
			// 			],
			// 			"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountETH",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenA",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20",
			// 					"name": "tokenB",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "pool",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "liquidity",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountAMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountBMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "bool",
			// 					"name": "approveMax",
			// 					"type": "bool"
			// 				},
			// 				{
			// 					"internalType": "uint8",
			// 					"name": "v",
			// 					"type": "uint8"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "r",
			// 					"type": "bytes32"
			// 				},
			// 				{
			// 					"internalType": "bytes32",
			// 					"name": "s",
			// 					"type": "bytes32"
			// 				}
			// 			],
			// 			"name": "removeLiquidityWithPermit",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountA",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountB",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOut",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapETHForExactTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "payable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactETHForTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "payable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
			// 			"outputs": [],
			// 			"stateMutability": "payable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountIn",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactTokensForETH",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountIn",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
			// 			"outputs": [],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountIn",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactTokensForTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountIn",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOutMin",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
			// 			"outputs": [],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOut",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountInMax",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapTokensForExactETH",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountOut",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "amountInMax",
			// 					"type": "uint256"
			// 				},
			// 				{
			// 					"internalType": "address[]",
			// 					"name": "poolsPath",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "contract IERC20[]",
			// 					"name": "path",
			// 					"type": "address[]"
			// 				},
			// 				{
			// 					"internalType": "address",
			// 					"name": "to",
			// 					"type": "address"
			// 				},
			// 				{
			// 					"internalType": "uint256",
			// 					"name": "deadline",
			// 					"type": "uint256"
			// 				}
			// 			],
			// 			"name": "swapTokensForExactTokens",
			// 			"outputs": [
			// 				{
			// 					"internalType": "uint256[]",
			// 					"name": "amounts",
			// 					"type": "uint256[]"
			// 				}
			// 			],
			// 			"stateMutability": "nonpayable",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"inputs": [],
			// 			"name": "weth",
			// 			"outputs": [
			// 				{
			// 					"internalType": "contract IWETH",
			// 					"name": "",
			// 					"type": "address"
			// 				}
			// 			],
			// 			"stateMutability": "view",
			// 			"type": "function"
			// 		},
			// 		{
			// 			"stateMutability": "payable",
			// 			"type": "receive"
			// 		}
			// 	]
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
			// { name: 'LambSwap', address: '0x773a8D2F9bDd79c42ACdf4eECf0f941BAEfC9451', abi:  },
			{
				name: 'LambSwap', address: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WAVAX",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WAVAX",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAXSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapAVAXForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAXSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'TraderJoeSwap', address: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WAVAX",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WAVAX",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAXSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapAVAXForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAXSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'PangolinSwap', address: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WAVAX",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WAVAX",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAX",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityAVAXSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAVAXMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountAVAX",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapAVAXForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactAVAXForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForAVAXSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactAVAX",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
		]
	},
	{
		// chainId: 4002,
		chainId: 250,
		dexs: [
			// { name: 'LambSwap', address: '0x985Be8bB9Bc3421CdfD6fA40e6c8Ebfd84286681' },
			{
				name: 'LambSwap', address: '0xF491e7B69E4244ad4002BC14e878a34207E38c29', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
			{
				name: 'SpookySwap', address: '0xF491e7B69E4244ad4002BC14e878a34207E38c29', abi: [
					{
						"inputs": [
							{
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"inputs": [],
						"name": "WETH",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [],
						"name": "factory",
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "view",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "pure",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
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
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
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
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"inputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"stateMutability": "payable",
						"type": "receive"
					}
				]
			},
		]
	},
	{
		// chainId: 65,
		chainId: 66,
		dexs: [
			// { name: 'LambSwap', address: '0x62998513E9F40Ec32C445666b15531b22642c882' },
			{
				name: 'LambSwap', address: '0x069A306A638ac9d3a68a6BD8BE898774C073DCb3', abi: [
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "_WETH",
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
						"payable": false,
						"type": "event"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "WETH",
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
						"name": "factory",
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
						"name": "owner",
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
						"name": "renounceOwnership",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "swapMining",
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
								"name": "newOwner",
								"type": "address"
							}
						],
						"name": "transferOwnership",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"payable": false,
						"stateMutability": "payable",
						"type": "receive"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "address",
								"name": "_swapMininng",
								"type": "address"
							}
						],
						"name": "setSwapMining",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"payable": false,
						"stateMutability": "payable",
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
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					}
				]
			},
			{
				name: 'JSwap', address: '0x069A306A638ac9d3a68a6BD8BE898774C073DCb3', abi: [
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "_WETH",
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
						"payable": false,
						"type": "event"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "WETH",
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
						"name": "factory",
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
						"name": "owner",
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
						"name": "renounceOwnership",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "swapMining",
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
								"name": "newOwner",
								"type": "address"
							}
						],
						"name": "transferOwnership",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": false,
						"payable": false,
						"stateMutability": "payable",
						"type": "receive"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "address",
								"name": "_swapMininng",
								"type": "address"
							}
						],
						"name": "setSwapMining",
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"payable": false,
						"stateMutability": "payable",
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
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					}
				]
			},
			{
				name: 'CherrySwap', address: '0x865bfde337C8aFBffF144Ff4C29f9404EBb22b15', abi: [
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "address",
								"name": "_factory",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "_WETH",
								"type": "address"
							}
						],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "constructor"
					},
					{
						"constant": false,
						"inputs": [],
						"name": "WETH",
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
						"name": "factory",
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
						"payable": false,
						"stateMutability": "payable",
						"type": "receive"
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
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountADesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenDesired",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "addLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							}
						],
						"payable": false,
						"stateMutability": "payable",
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
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidity",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETH",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "tokenA",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "tokenB",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountAMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountBMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermit",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountToken",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"name": "token",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountTokenMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountETHMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "bool",
								"name": "approveMax",
								"type": "bool"
							},
							{
								"indexed": false,
								"internalType": "uint8",
								"name": "v",
								"type": "uint8"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "r",
								"type": "bytes32"
							},
							{
								"indexed": false,
								"internalType": "bytes32",
								"name": "s",
								"type": "bytes32"
							}
						],
						"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountETH",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountInMax",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapTokensForExactETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETH",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapETHForExactTokens",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
						"outputs": [],
						"payable": false,
						"stateMutability": "payable",
						"type": "function"
					},
					{
						"constant": false,
						"inputs": [
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "amountOutMin",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							},
							{
								"indexed": false,
								"internalType": "address",
								"name": "to",
								"type": "address"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "deadline",
								"type": "uint256"
							}
						],
						"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
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
								"internalType": "uint256",
								"name": "amountA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveA",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveB",
								"type": "uint256"
							}
						],
						"name": "quote",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountB",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountOut",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "uint256",
								"name": "reserveOut",
								"type": "uint256"
							}
						],
						"name": "getAmountIn",
						"outputs": [
							{
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
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
								"internalType": "uint256",
								"name": "amountIn",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsOut",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
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
								"internalType": "uint256",
								"name": "amountOut",
								"type": "uint256"
							},
							{
								"indexed": false,
								"internalType": "address[]",
								"name": "path",
								"type": "address[]"
							}
						],
						"name": "getAmountsIn",
						"outputs": [
							{
								"internalType": "uint256[]",
								"name": "amounts",
								"type": "uint256[]"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					}
				]
			},
		]
	},
];