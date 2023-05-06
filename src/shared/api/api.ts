import axios from 'axios';
import { LS_USER_KEY } from 'shared/constants/localStorage';

export const api = axios.create({
    baseURL: __API__,
});

// @ts-ignore
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(LS_USER_KEY) || '';
    }
    return config;
});
