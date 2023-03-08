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
}

export const Text = memo(
    ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => (
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
            {text && <span className={styles.text}>{text}</span>}
        </div>
    )
);
