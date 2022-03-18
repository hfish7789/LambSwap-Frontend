import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { ethers } from 'ethers'
import getNodeUrl from './getRpcUrl'

import { REACT_APP_CHAIN_ID, POLLING_INTERVAL, connectorNames } from '../config'

const rpcUrl = getNodeUrl()
const chainId = parseInt(REACT_APP_CHAIN_ID, 10)

const injected = new InjectedConnector({ supportedChainIds: [chainId] })

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

export const connectorsByName = {
  [connectorNames.Injected]: injected,
  [connectorNames.WalletConnect]: walletconnect,
  [connectorNames.BSC]: bscConnector,
}

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}
