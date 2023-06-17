import { CSSProperties, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Avatar.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

interface AvatarProps {
    className?: string;
    src: string;
    size?: number;
}

export const Avatar = ({ className, src, size = 48 }: AvatarProps) => {
    const { t } = useTranslation();

    const style = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size]
    );

    return (
        <img
            className={classNames(styles.container, {}, [className])}
            alt={`${t('Avatar')}`}
            style={style}
            src={src}
        />
    );
};
