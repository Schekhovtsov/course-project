import { Suspense, lazy } from 'react';
import { ArticleRatingProps } from '../../ui/ArticleRating/ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height="100px" />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
