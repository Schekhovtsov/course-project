import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';

import styles from './PageError.module.scss';

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
