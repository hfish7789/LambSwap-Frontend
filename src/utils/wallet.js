// Set of helper functions to facilitate wallet setup
import detectEthereumProvider from '@metamask/detect-provider';
import { BASE_BSC_SCAN_URL } from '../config';
import { nodes } from './getRpcUrl';
import { REACT_APP_CHAIN_ID } from '../config'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  let provider = window.ethereum;
  if (!provider) {
    provider = await detectEthereumProvider();
  }
  if (provider) {
    const chainId = REACT_APP_CHAIN_ID;
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Binance Smart Chain Mainnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: nodes,
            blockExplorerUrls: [`${BASE_BSC_SCAN_URL[chainId]}/`],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error('Failed to setup the network in Metamask:', error)
      // console.error(error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};
