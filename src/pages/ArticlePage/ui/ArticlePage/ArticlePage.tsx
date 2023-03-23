import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('articlePage');

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {t('Article page')}
        </div>
    );
};

export default memo(ArticlePage);
