import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';

import { classNames } from '@/shared/lib/classNames';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('mainPage');

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <p>{`${t('Something went wrong')}`}</p>
        </div>
    );
};
