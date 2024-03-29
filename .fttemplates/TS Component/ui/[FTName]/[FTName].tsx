import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import styles from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = memo(({ className }: [FTName]Props) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {/* Content */}
        </div>
    );
});