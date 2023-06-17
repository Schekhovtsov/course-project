import { memo } from 'react';

import { CommentType } from '../../model/types/Comment';

import styles from './CommentCard.module.scss';

import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
}

export const CommentCard = memo(({ className, comment }: CommentCardProps) => {
    if (!comment) {
        return null;
    }

    return (
        <VStack max className={classNames(styles.container, {}, [className])}>
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
