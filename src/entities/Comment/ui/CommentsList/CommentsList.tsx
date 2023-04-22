import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: CommentType[];
    // eslint-disable-next-line no-unused-vars
    onSendComment?: (value: string) => void;
}

export const CommentsList = memo(
    ({ className, comments, onSendComment }: CommentsListProps) => {
        const { t } = useTranslation();

        return (
            <div className={classNames(styles.container, {}, [className])}>
                {comments?.length ? (
                    <div className={styles.block}>
                        <Text
                            title={t('Comments')}
                            className={styles.commentsHeader}
                        />
                        <AddCommentForm onSendComment={onSendComment} />
                        {comments.map((comment) => (
                            <CommentCard
                                comment={comment}
                                className={styles.comment}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.block}>
                        <Text
                            title={t('Comments')}
                            className={styles.commentsHeader}
                        />
                        <AddCommentForm onSendComment={onSendComment} />
                        <Text text={t('There is no comments yet')} />
                    </div>
                )}
            </div>
        );
    }
);
