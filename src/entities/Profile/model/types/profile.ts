export interface Profile {
    firstName: string;
    lastName: string;
    city: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readOnly?: boolean;
}
