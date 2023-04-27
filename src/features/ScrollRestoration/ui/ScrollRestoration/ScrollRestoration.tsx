import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './ScrollRestoration.module.scss';

interface ScrollRestorationProps {
    className?: string;
}

export const ScrollRestoration = memo(
    ({ className }: ScrollRestorationProps) => {
        const dispatch = useAppDispatch();
        const { t } = useTranslation();

        return (
            <div className={classNames(styles.container, {}, [className])}>
                {/* Content */}
            </div>
        );
    }
);
