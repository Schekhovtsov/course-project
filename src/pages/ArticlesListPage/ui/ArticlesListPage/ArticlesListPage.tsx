import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import {
    ReducersList,
    useDynamicReducerLoader,
} from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { ArticleViewType } from 'entities/Article/model/types/Article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import styles from './ArticlesListPage.module.scss';
import {
    articlesListPageActions,
    articlesListPageReducer,
    getArticles,
} from '../../model/slice/articlesListPageSlice';
import {
    selectArticlesListPageIsLoading,
    selectArticlesListPageView,
} from '../../model/selector/articlesListPageSelectors';

interface ArticlesListPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesListPage: articlesListPageReducer,
};

const ArticlesListPage = ({ className }: ArticlesListPageProps) => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesListPageIsLoading);
    const view = useSelector(selectArticlesListPageView);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
    });

    useDynamicReducerLoader(reducers);

    const onChangeView = useCallback(
        (view: ArticleViewType) => {
            dispatch(articlesListPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <ArticleViewSwitcher view={view} onChangeHandler={onChangeView} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                view={view}
            />
        </div>
    );
};

export default memo(ArticlesListPage);
