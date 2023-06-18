import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';

import { ArticleRatingProps } from '../../ui/ArticleRating/ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height="100px" />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
);
