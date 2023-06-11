import { Article, articleReducer } from '@/entities/Article';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';
import { ArticleComments } from '../ArticleComments/ArticleComments';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { articlePageReducer } from '../../model/slice';

const reducers: ReducersList = {
    article: articleReducer,
    articlePage: articlePageReducer,
};

const ArticlePage = () => {
    const { id } = useParams<{ id: string }>();

    useDynamicReducerLoader(reducers, false);

    return (
        <Page>
            <ArticleHeader />
            <Article id={id} />
            <ArticleComments id={id} />
        </Page>
    );
};

export default memo(ArticlePage);
