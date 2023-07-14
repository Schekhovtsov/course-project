import { CSSProperties, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppImage } from '../../AppImage';
import { Skeleton } from '../../Skeleton';

import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    size?: number;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

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
        <AppImage
            fallback={
                <Skeleton width={size} height={size} borderRadius="50%" />
            }
            className={classNames(styles.container, {}, [className])}
            alt={`${t('Avatar')}`}
            style={style}
            src={src}
        />
    );
};
