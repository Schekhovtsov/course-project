import { EntityState } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/Article';

export interface ArticlesListPageSchema extends EntityState<ArticleType> {
    isLoading?: boolean;
    error?: string | null;
    view: ArticleViewType;
}
