import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        if (isLoading) {
            return (
                <div className={classNames(styles.container, {}, [className])}>
                    <div className={styles.header}>
                        <Skeleton width="100%" height={100} />
                    </div>
                </div>
            );
        }

        if (!comment) {
            return null;
        }

        return (
            <div className={classNames(styles.container, {}, [className])}>
                <AppLink
                    to={`${RoutePath.profile}${comment?.user.id}`}
                    className={styles.header}
                >
                    {comment?.user.avatar ? (
                        <Avatar size={30} src={comment.user.avatar} />
                    ) : null}
                    <Text text={comment?.user?.username} bold />
                </AppLink>
                <Text text={comment?.text} />
            </div>
        );
    }
);
