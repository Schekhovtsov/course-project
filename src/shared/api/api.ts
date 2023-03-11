import axios from 'axios';
import { LS_USER_KEY } from 'shared/constants/localStorage';

export const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(LS_USER_KEY) || '',
    },
});
