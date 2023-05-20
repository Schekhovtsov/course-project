import { Article, articleReducer } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticlePage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page';
import { articlePageReducer } from 'pages/ArticlePage/model/slice';
import { ArticleHeader } from 'pages/ArticlePage/ui/ArticleHeader/ArticleHeader';
import { fetchArticlesRecommends } from '../../model/services/fetchArticleRecommends';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articlePageCommentsSlice';

const reducers: ReducersList = {
    article: articleReducer,
    articlePage: articlePageReducer,
};

const ArticlePage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articlePage');
    const { id } = useParams<{ id: string }>();

    useDynamicReducerLoader(reducers, false);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommends());
    });

    const comments = useSelector(getArticleComments.selectAll);

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
        },
        [dispatch]
    );

    if (!id) {
        return <Page>{t('Article not found')}</Page>;
    }

    return (
        <Page>
            <ArticleHeader />
            <Article id={id} />
            <CommentsList comments={comments} onSendComment={onSendComment} />
        </Page>
    );
};

export default memo(ArticlePage);
