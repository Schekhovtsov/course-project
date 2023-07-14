import { memo } from 'react';
import { getRouteProfile } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

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
        <VStack
            data-testid="CommentCard.Content"
            max
            className={classNames(styles.container, {}, [className])}
        >
            <AppLink
                to={getRouteProfile(comment?.user.id)}
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
