/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    bold?: boolean;
}

export const Text = memo(
    ({
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        bold = false,
    }: TextProps) => {
        const textElement = bold ? (
            <span className={styles.text}>
                <b>{text}</b>
            </span>
        ) : (
            <span className={styles.text}>{text}</span>
        );

        return (
            <div
                className={classNames(styles.container, {}, [
                    className,
                    styles[theme],
                ])}
            >
                {title && (
                    <p className={styles.title}>
                        <b>{title}</b>
                    </p>
                )}
                {text && textElement}
            </div>
        );
    }
);
