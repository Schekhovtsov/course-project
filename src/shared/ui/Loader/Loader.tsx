import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className={classNames('container', {}, [className])}>
        <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
));
