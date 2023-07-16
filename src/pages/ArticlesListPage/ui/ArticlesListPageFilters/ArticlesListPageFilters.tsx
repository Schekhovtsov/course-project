import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/lib/types';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';

import {
    selectArticlesListPageSearch,
    selectArticlesListPageSortOrder,
    selectArticlesListPageType,
    selectArticlesListPageView,
} from '../../model/selector/articlesListPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { articlesListPageActions } from '../../model/slice/articlesListPageSlice';

import styles from './ArticlesListPageFilters.module.scss';

interface ArticlesListPageFiltersProps {
    className?: string;
}

const sortOrder: { order: SortOrder; label: string }[] = [
    {
        order: 'asc',
        label: '↓',
    },
    {
        order: 'desc',
        label: '↑',
    },
];

export const ArticlesListPageFilters = ({
    className,
}: ArticlesListPageFiltersProps) => {
    const { t } = useTranslation('articlePage');
    const dispatch = useAppDispatch();
    const view = useSelector(selectArticlesListPageView);
    const order = useSelector(selectArticlesListPageSortOrder);
    const search = useSelector(selectArticlesListPageSearch);
    const type = useSelector(selectArticlesListPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleViewType) => {
            dispatch(articlesListPageActions.setView(view));
            dispatch(articlesListPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeOrder = useCallback(
        (order: SortOrder) => () => {
            dispatch(articlesListPageActions.setOrder(order));
            dispatch(articlesListPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesListPageActions.setSearch(search));
            dispatch(articlesListPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeType = useCallback(
        (value: string) => {
            dispatch(articlesListPageActions.setType(value));
            dispatch(articlesListPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.innerContainer}>
                <div className={styles.leftBlock}>
                    <ArticleViewSwitcher
                        view={view}
                        onChangeHandler={onChangeView}
                    />
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder={`${t('Search')}`}
                        className={styles.search}
                    />
                </div>

                <div className={styles.sortOrder}>
                    {sortOrder.map(({ order: _order, label }) => (
                        <Button
                            key={label}
                            variant={order === _order ? 'primary' : 'secondary'}
                            onClick={onChangeOrder(_order)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
            </div>

            <div>
                <ArticleTypeTabs value={type} onChangeType={onChangeType} />
            </div>
        </div>
    );
};
