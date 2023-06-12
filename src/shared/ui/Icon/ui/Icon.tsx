import { classNames } from '@/shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
}

export const Icon = ({
    className,
    Svg,
    inverted,
    width,
    height,
    ...otherProps
}: IconProps) => (
    <Svg
        {...otherProps}
        width={width}
        height={height}
        className={classNames(
            !inverted ? styles.container : styles.inverted,
            {},
            [className]
        )}
    />
);
