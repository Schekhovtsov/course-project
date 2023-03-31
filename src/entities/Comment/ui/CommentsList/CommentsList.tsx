import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentsList = memo(
    ({ className, comments, isLoading }: CommentsListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return null;
        }

        return (
            <div className={classNames(styles.container, {}, [className])}>
                {comments?.length ? (
                    <>
                        <Text
                            title={t('Comments')}
                            className={styles.commentsHeader}
                        />
                        {comments.map((comment) => (
                            <CommentCard
                                comment={comment}
                                className={styles.comment}
                                isLoading={isLoading}
                            />
                        ))}
                    </>
                ) : (
                    <Text text={t('There is no comments yet')} />
                )}
            </div>
        );
    }
);
