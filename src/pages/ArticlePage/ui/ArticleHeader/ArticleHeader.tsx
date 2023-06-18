import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectArticle } from '@/entities/Article';
import {
    getRouteArticleEdit,
    getRouteArticles,
} from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

import { selectCanEditArticle } from '../../model/selectors/article';

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
        navigate(getRouteArticles());
    }, [navigate]);

    const onToEditMode = useCallback(() => {
        navigate(getRouteArticleEdit(article!.id));
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
