import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const dispatch = useAppDispatch();

        if (isLoading) {
            return (
                <div className={classNames(styles.container, {}, [className])}>
                    <div className={styles.header}>
                        <Skeleton width="100%" height={100} />
                    </div>
                </div>
            );
        }

        return (
            <div className={classNames(styles.container, {}, [className])}>
                <div className={styles.header}>
                    {comment.user.avatar ? (
                        <Avatar size={30} src={comment.user.avatar} />
                    ) : null}
                    <Text text={comment?.user?.username} bold />
                </div>
                <Text text={comment?.text} />
            </div>
        );
    }
);
