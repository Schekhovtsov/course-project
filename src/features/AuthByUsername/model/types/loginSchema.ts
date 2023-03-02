import { SerializedError } from '@reduxjs/toolkit';

export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string | SerializedError;
}
