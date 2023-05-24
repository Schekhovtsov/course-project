import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import { CommentType } from '../../model/types/Comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
}

export const CommentCard = memo(({ className, comment }: CommentCardProps) => {
    if (!comment) {
        return null;
    }

    return (
        <VStack className={classNames(styles.container, {}, [className])}>
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
        </VStack>
    );
});
