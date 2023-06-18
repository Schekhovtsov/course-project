import { ArticleType } from '@/entities/Article';
import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { SortOrder } from '@/shared/lib/types';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticlesListPageSchema extends EntityState<ArticleType> {
    isLoading?: boolean;
    error?: string | null;
    view: ArticleViewType;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: string;
    search: string;
    type: string;

    _inited: boolean;
}
