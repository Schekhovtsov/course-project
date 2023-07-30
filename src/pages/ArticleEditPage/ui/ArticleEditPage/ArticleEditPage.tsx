/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('articlePage');
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(styles.container, {}, [className])}>
            {isEdit
                ? `${t('Edit article message')}`
                : 'Страница создания новой статьи'}
        </Page>
    );
});

export default ArticleEditPage;
