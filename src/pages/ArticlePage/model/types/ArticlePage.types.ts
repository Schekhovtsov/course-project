import { EntityState } from '@reduxjs/toolkit';
import { ArticleType } from '@/entities/Article';
import { CommentType } from '@/entities/Comment';

export interface ArticlePageCommentsSchema extends EntityState<CommentType> {
    isLoading?: boolean;
    error?: string | null;
}

export interface ArticlePageRecommendsSchema extends EntityState<ArticleType> {
    isLoading?: boolean;
    error?: string | null;
}

export interface ArticlePageSchema {
    comments: ArticlePageCommentsSchema;
    recommends: ArticlePageRecommendsSchema;
}
