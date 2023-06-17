import styles from './ArticleViewSwitcher.module.scss';

import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ArticleViewSwitcherProps {
    className?: string;
    view?: ArticleViewType;
    // eslint-disable-next-line no-unused-vars
    onChangeHandler: (view: ArticleViewType) => void;
}

const viewTypes: { view: ArticleViewType; label: string }[] = [
    {
        view: 'tile',
        label: 'Tile',
    },
    {
        view: 'list',
        label: 'List',
    },
];

export const ArticleViewSwitcher = ({
    className,
    view,
    onChangeHandler,
}: ArticleViewSwitcherProps) => {
    const onClickHandler = (newView: ArticleViewType) => () => {
        onChangeHandler?.(newView);
    };

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {viewTypes.map(({ view: _view, label }) => (
                <Button
                    key={label}
                    theme={
                        view === _view
                            ? ButtonTheme.PRIMARY
                            : ButtonTheme.SECONDARY
                    }
                    onClick={onClickHandler(_view)}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
};
