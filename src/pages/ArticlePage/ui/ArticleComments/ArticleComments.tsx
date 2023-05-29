import { CommentsList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articlePageCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';

interface ArticleCommentsProps {
    id: string;
}

export const ArticleComments = ({ id }: ArticleCommentsProps) => {
    const dispatch = useAppDispatch();

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

    return <CommentsList comments={comments} onSendComment={onSendComment} />;
};
