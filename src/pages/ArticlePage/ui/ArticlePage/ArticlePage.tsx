import { Article, articleReducer } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticlePage/model/services/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getArticleCommentsIsLoading } from '../../model/selectors/articlePageSelector';
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

    useDynamicReducerLoader(reducers, false);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    if (!id) {
        return <div>{t('Article not found')}</div>;
    }

    return (
        <>
            <Article id={id} />
            <CommentsList isLoading={commentsIsLoading} comments={comments} />
        </>
    );
};

export default memo(ArticlePage);
