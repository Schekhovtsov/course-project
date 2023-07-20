import { ArticleViewSwitcher } from '@/features/ArticleViewSwitcher';

import { useArticleFilters } from '../../model/lib/hooks/useArticleFilters';

export const ArticleViewChanger = () => {
    const { view, onChangeView } = useArticleFilters();

    return <ArticleViewSwitcher view={view} onChangeHandler={onChangeView} />;
};
