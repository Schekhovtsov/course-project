import { CommentType } from '../../model/types/Comment';
import { CommentCard } from '../../ui/CommentCard/CommentCard';

import styles from './CommentsList.module.scss';

import { VStack } from '@/shared/ui/Stack';

interface CommentsListProps {
    comments: CommentType[];
}

export const CommentsList = ({ comments }: CommentsListProps) => (
    <VStack max>
        {comments.map((comment) => (
            <CommentCard
                key={comment.id}
                comment={comment}
                className={styles.comment}
            />
        ))}
    </VStack>
);
