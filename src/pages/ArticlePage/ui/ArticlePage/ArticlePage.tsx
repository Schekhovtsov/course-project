import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Article, articleReducer } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { StickyContentLayout } from '@/shared/layouts';
import { getFeatureFlag } from '@/shared/lib/features';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';

import { articlePageReducer } from '../../model/slice';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';

const reducers: ReducersList = {
    article: articleReducer,
    articlePage: articlePageReducer,
};

const ArticlePage = () => {
    const { id } = useParams<{ id: string }>();
    useDynamicReducerLoader(reducers, false);
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

    if (!id) {
        return null;
    }

    return (
        <StickyContentLayout
            content={
                <Page>
                    <Article id={id} />
                    {isArticleRatingEnabled && <ArticleRating articleId={id} />}
                    <ArticleComments id={id} />
                </Page>
            }
            right={<ArticleHeader />}
        />
    );
};

export default memo(ArticlePage);
