import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Article, articleReducer } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
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

    if (!id) {
        return null;
    }

    return (
        <Page>
            <ArticleHeader />
            <Article id={id} />
            <ArticleRating articleId={id} />
            <ArticleComments id={id} />
        </Page>
    );
};

export default memo(ArticlePage);
