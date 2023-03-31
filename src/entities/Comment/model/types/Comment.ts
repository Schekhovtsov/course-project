import { User } from 'entities/User';

export type CommentType = {
    id: string;
    user: User;
    text: string;
};

export interface CommentSchema {
    isLoading: boolean;
    error?: string | null;
    data?: CommentType | null;
}
