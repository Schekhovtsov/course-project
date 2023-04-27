import { Article, articleReducer } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticlePage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import {
    articlePageCommentsReducer,
    getArticleComments,
} from '../../model/slice/articlePageCommentsSlice';

const reducers: ReducersList = {
    article: articleReducer,
    articleComments: articlePageCommentsReducer,
};

const ArticlePage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articlePage');
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useDynamicReducerLoader(reducers, false);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
        },
        [dispatch]
    );

    const onBackToArticlesList = useCallback(() => {
        navigate(`${RoutePath.articles}`);
    }, [navigate]);

    if (!id) {
        return <Page>{t('Article not found')}</Page>;
    }

    return (
        <Page>
            <Button onClick={onBackToArticlesList}>
                {t('Back to articles list')}
            </Button>
            <Article id={id} />
            <CommentsList comments={comments} onSendComment={onSendComment} />
        </Page>
    );
};

export default memo(ArticlePage);
