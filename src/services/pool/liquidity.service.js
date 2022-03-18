import { sendRequest } from "../api";

export const create_pool = (chain_id, pair, token1_address, token2_address, token1_amount, token2_amount) => {
    console.log({ chain_id, pair, token1_address, token2_address, token1_amount, token2_amount });
    return sendRequest({
        url: '/pool/create_pool',
        method: 'POST',
        data: { 
            chain_id, pair, token1_address, token2_address, token1_amount, token2_amount 
        }
    });
}

export const get_pools = (chain_id) => {
    return sendRequest({
        url: `/pool/get_pools/${chain_id}`,
        method: 'GET'
    });
}

export const get_pool = (chain_id, token1_address, token2_address) => {
    return sendRequest({
        url: `/pool/get_pool/${chain_id}/${token1_address}/${token2_address}`,
        method: 'GET'
    });
}

export const filter_pool = (filter_data) => {
    return sendRequest({
        url: `/pool/filter_pool`,
        method: 'POST',
        data: filter_data
    });
}