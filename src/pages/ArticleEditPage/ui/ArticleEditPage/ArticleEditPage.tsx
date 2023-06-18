/* eslint-disable i18next/no-literal-string */
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(styles.container, {}, [className])}>
            {isEdit
                ? `Страница редактирования статьи с ID = ${id}`
                : 'Страница создания новой статьи'}
        </Page>
    );
});

export default ArticleEditPage;
