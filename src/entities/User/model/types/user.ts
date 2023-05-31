/* eslint-disable no-unused-vars */
export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR',
}

export interface User {
    id: string;
    username: string;
    roles?: UserRole[];
    avatar?: string;
}

export interface UserSchema {
    authData?: User | null;
    _mounted: boolean;
}
