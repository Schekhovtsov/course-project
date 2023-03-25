import { Article, articleReducer } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';

const reducers: ReducersList = {
    article: articleReducer,
};

const ArticlePage = () => {
    const { t } = useTranslation('articlePage');
    const { id } = useParams<{ id: string }>();

    useDynamicReducerLoader(reducers, false);

    if (!id) {
        return <div>{t('Article not found')}</div>;
    }

    return <Article id={id} />;
};

export default memo(ArticlePage);
