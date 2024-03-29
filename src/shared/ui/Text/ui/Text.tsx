/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';

import styles from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

type TitleSize = 'small' | 'medium' | 'big' | 'xl';

type HeaderTag = 'h1' | 'h2' | 'h3';

interface TextProps {
    className?: string;
    title?: string;
    titleSize?: TitleSize;
    text?: string;
    variant?: TextVariant;
    bold?: boolean;
    withTitle?: boolean;
    'data-testid'?: string;
}

const mapSizeToHeaderTag: Record<TitleSize, HeaderTag> = {
    small: 'h3',
    medium: 'h2',
    big: 'h1',
    xl: 'h1',
};

export const Text = memo(
    ({
        className,
        title,
        text,
        titleSize = 'big',
        variant = 'primary',
        withTitle = false,
        bold = false,
        'data-testid': dataTestId = '',
    }: TextProps) => {
        const HeaderTag = mapSizeToHeaderTag[titleSize];

        const titleMods = { [styles.xl]: titleSize === 'xl' };

        const textElement = bold ? (
            <span
                className={styles.text}
                title={withTitle ? text : ''}
                data-testid={`${dataTestId}.Text`}
            >
                <b>{text}</b>
            </span>
        ) : (
            <span
                className={styles.text}
                title={withTitle ? text : ''}
                data-testid={`${dataTestId}.Text`}
            >
                {text}
            </span>
        );

        return (
            <div
                className={classNames(styles.container, titleMods, [
                    className,
                    styles[variant],
                ])}
            >
                {title && (
                    <HeaderTag
                        className={styles.title}
                        title={withTitle ? title : ''}
                        data-testid={`${dataTestId}.Header`}
                    >
                        <b>{title}</b>
                    </HeaderTag>
                )}
                {text && textElement}
            </div>
        );
    }
);
