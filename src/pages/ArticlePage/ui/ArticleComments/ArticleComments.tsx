import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentsList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articlePageCommentsSlice';

import styles from './ArticleComments.module.scss';

interface ArticleCommentsProps {
    id?: string;
}

export const ArticleComments = ({ id }: ArticleCommentsProps) => {
    const { t } = useTranslation();
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

    return comments?.length ? (
        <VStack max gap={10}>
            <Text
                title={`${t('Comments')}`}
                className={styles.commentsHeader}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentsList comments={comments} />
        </VStack>
    ) : (
        <VStack max gap={10}>
            <Text
                title={`${t('Comments')}`}
                className={styles.commentsHeader}
            />
            <Text text={`${t('There is no comments yet')}`} />
        </VStack>
    );
};
