import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { selectCanEditArticle } from 'pages/ArticlePage/model/selectors/article';
import { selectArticle } from 'entities/Article';
import styles from './ArticleHeader.module.scss';

interface ArticleHeaderProps {
    className?: string;
}

export const ArticleHeader = ({ className }: ArticleHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const article = useSelector(selectArticle);
    const canEditArticle = useSelector(selectCanEditArticle);

    const onBackToArticlesList = useCallback(() => {
        navigate(`${RoutePath.articles}`);
    }, [navigate]);

    const onToEditMode = useCallback(() => {
        navigate(`${RoutePath.articles}/${article?.id}/edit`);
    }, [navigate, article]);

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Button onClick={onBackToArticlesList}>
                {t('Back to articles list')}
            </Button>
            {canEditArticle ? (
                <Button onClick={onToEditMode}>{t('Edit')}</Button>
            ) : null}
        </div>
    );
};
