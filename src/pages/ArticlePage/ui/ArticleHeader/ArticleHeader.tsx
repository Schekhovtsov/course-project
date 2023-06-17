import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCanEditArticle } from '../../model/selectors/article';

import styles from './ArticleHeader.module.scss';

import { selectArticle } from '@/entities/Article';
import { RoutePath } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

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
                {`${t('Back to articles list')}`}
            </Button>
            {canEditArticle ? (
                <Button onClick={onToEditMode}>{`${t('Edit')}`}</Button>
            ) : null}
        </div>
    );
};
