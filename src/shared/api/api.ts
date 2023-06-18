import { LS_USER_KEY } from '@/shared/constants/localStorage';

import axios from 'axios';

export const api = axios.create({
    baseURL: __API__,
});

api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(LS_USER_KEY) || '';
    }
    return config;
});
