import { sendRequest } from "../api";

export const get_tokens = (chain_id) => {
    return sendRequest({
        url: `/get_tokens/${chain_id}`,
        method: 'GET'
    });
}

export const token_import = (token_info) => {
    console.log(token_info);
    return sendRequest({
        url: `/token_import`,
        method: 'POST',
        data: token_info
    });
}

export const token_filter = (data) => {
    return sendRequest({
        url: `/token_filter/${data}`,
        method: 'GET'
    });
}