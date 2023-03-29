import { classNames } from 'shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => (
    <Svg
        width={24}
        height={24}
        className={classNames(styles.container, {}, [className])}
    />
);
