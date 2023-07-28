/* eslint-disable no-unused-vars */
import { memo, useCallback } from 'react';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames';

import { Button } from '../../Button';
import { Icon } from '../../Icon';

import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onButtonClick = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Button
                onClick={onButtonClick}
                className={styles.button}
                variant="text"
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code className={styles.code}>
                <pre>{text}</pre>
            </code>
        </div>
    );
});
