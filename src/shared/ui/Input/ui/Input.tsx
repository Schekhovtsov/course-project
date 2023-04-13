import {
    ChangeEvent,
    memo,
    InputHTMLAttributes,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | null;
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input = memo(
    ({
        className,
        type = 'text',
        value,
        onChange,
        autofocus,
        width = 250,
        ...otherProps
    }: InputProps) => {
        const inputRef = useRef<HTMLInputElement>(null);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        useEffect(() => {
            if (autofocus) {
                inputRef.current?.focus();
            }
        }, [autofocus]);

        return (
            <input
                {...otherProps}
                ref={inputRef}
                type={type}
                value={value ?? ''}
                onChange={onChangeHandler}
                className={classNames(styles.container, {}, [className])}
                style={{ width }}
            />
        );
    }
);
