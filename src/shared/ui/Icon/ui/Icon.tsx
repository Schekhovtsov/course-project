import { classNames } from '@/shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({ className, Svg, inverted }: IconProps) => (
    <Svg
        width={24}
        height={24}
        className={classNames(
            !inverted ? styles.container : styles.inverted,
            {},
            [className]
        )}
    />
);
