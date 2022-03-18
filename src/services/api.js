import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'http://localhost/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export const sendRequest = ({ url, method, data }) => {
    return new Promise((resolve, reject) => {
        axiosInstance({
            method,
            url,
            data: data || {}
        })
        .then(response => {
            resolve(response.data)
        })
        .catch(err => {
            reject(err.response)
        });
    });
}

export default axiosInstance;