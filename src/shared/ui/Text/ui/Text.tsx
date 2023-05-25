/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

type TitleSize = 'small' | 'medium' | 'big';

type HeaderTag = 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string;
    title?: string;
    titleSize?: TitleSize;
    text?: string;
    theme?: TextTheme;
    bold?: boolean;
    withTitle?: boolean;
}

const mapSizeToHeaderTag: Record<TitleSize, HeaderTag> = {
    small: 'h3',
    medium: 'h2',
    big: 'h3',
};

export const Text = memo(
    ({
        className,
        title,
        text,
        titleSize = 'big',
        theme = TextTheme.PRIMARY,
        withTitle = false,
        bold = false,
    }: TextProps) => {
        const HeaderTag = mapSizeToHeaderTag[titleSize];
        const textElement = bold ? (
            <span className={styles.text} title={withTitle ? text : ''}>
                <b>{text}</b>
            </span>
        ) : (
            <span className={styles.text} title={withTitle ? text : ''}>
                {text}
            </span>
        );

        return (
            <div
                className={classNames(styles.container, {}, [
                    className,
                    styles[theme],
                ])}
            >
                {title && (
                    <HeaderTag className={styles.title} title={withTitle ? title : ''}>
                        <b>{title}</b>
                    </HeaderTag>
                )}
                {text && textElement}
            </div>
        );
    }
);
