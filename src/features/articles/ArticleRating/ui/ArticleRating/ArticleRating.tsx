import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { selectUserAuthData } from '@/entities/User/model/selectors/userSelector';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import { useArticlesRating, useRateArticle } from '../../api/articleRatingApi';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
    const { t } = useTranslation();

    const userData = useSelector(selectUserAuthData);
    const { data, isLoading } = useArticlesRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    articleId,
                    feedback,
                    rating: starsCount,
                    userId: userData?.id ?? '',
                });
            } catch (e) {
                // handle error
            }
        },
        [articleId, rateArticleMutation, userData?.id]
    );

    const onAcceptHandler = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateArticle(starsCount, feedback);
        },
        [handleRateArticle]
    );

    const onCancelHandler = useCallback(
        (starsCount: number) => {
            handleRateArticle(starsCount);
        },
        [handleRateArticle]
    );

    if (isLoading) {
        return <Skeleton width="100%" height="100px" />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            rating={rating?.rating}
            onAccept={onAcceptHandler}
            onCancel={onCancelHandler}
            className={className}
            title={`${t('Rate the article')}`}
            feedbackTitle={`${t('Rate the article')}`}
            hasFeedback
        />
    );
});

export default ArticleRating;
