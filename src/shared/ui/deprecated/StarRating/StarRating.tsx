import { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../../redesigned/Icon';

import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    // eslint-disable-next-line no-unused-vars
    onSelect?: (startCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const StarRating = memo(
    ({
        className,
        onSelect,
        selectedStars = 0,
        size = 50,
    }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStarsCount(starsCount);
            }
        };

        const onLeave = () => () => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        };

        const onClick = (starsCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(true);
            }
        };

        return (
            <div className={classNames(styles.container, {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        className={classNames(
                            styles.star,
                            { [styles.selected]: isSelected },
                            [
                                currentStarsCount >= starNumber
                                    ? styles.hovered
                                    : styles.notHovered,
                            ]
                        )}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                ))}
            </div>
        );
    }
);
