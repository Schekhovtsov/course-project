import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => (
    <div className={classNames(styles.container, {}, [className])}>
        <p>Something went wrong</p>
    </div>
);
