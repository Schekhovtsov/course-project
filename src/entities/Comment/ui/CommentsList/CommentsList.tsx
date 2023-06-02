import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { VStack } from 'shared/ui/Stack';
import { CommentCard } from '../../ui/CommentCard/CommentCard';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentsList.module.scss';

interface CommentsListProps {
    comments?: CommentType[];
    // eslint-disable-next-line no-unused-vars
    onSendComment: (value: string) => void;
}

export const CommentsList = memo(
    ({ comments, onSendComment }: CommentsListProps) => {
        const { t } = useTranslation();

        return comments?.length ? (
            <VStack max gap={10}>
                <Text
                    title={`${t('Comments')}`}
                    className={styles.commentsHeader}
                />
                <AddCommentForm onSendComment={onSendComment} />
                {comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        className={styles.comment}
                    />
                ))}
            </VStack>
        ) : (
            <VStack max gap={10}>
                <Text
                    title={`${t('Comments')}`}
                    className={styles.commentsHeader}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <Text text={`${t('There is no comments yet')}`} />
            </VStack>
        );
    }
);
