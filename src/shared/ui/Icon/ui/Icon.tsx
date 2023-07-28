import { classNames } from '@/shared/lib/classNames';

import styles from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps | any;

export const Icon = ({
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    title,
    ...otherProps
}: IconProps) => {
    const icon = (
        <Svg
            {...otherProps}
            width={width}
            height={height}
            className={classNames(styles.container, {}, [className])}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={styles.button}
                onClick={otherProps.onClick}
                title={title}
                {...otherProps}
            >
                {icon}
            </button>
        );
    }

    return icon;
};
