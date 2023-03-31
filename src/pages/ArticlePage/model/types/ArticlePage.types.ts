import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';

export interface ArticlePageCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean;
    error?: string | null;
}
