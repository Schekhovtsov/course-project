import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesListPage.module.scss';

interface ArticlesListPageProps {
    className?: string;
}

const ArticlesListPage = ({ className }: ArticlesListPageProps) => {
    const { t } = useTranslation('');

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {t('Articles list page')}
        </div>
    );
};

export default memo(ArticlesListPage);
