import { ArticleViewType } from '@/entities/Article/model/types/Article';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticleViewSwitcher.module.scss';

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
        <VStack className={classNames(styles.container, {}, [className])}>
            {viewTypes.map(({ view: _view, label }) => (
                <Button
                    key={label}
                    variant={view === _view ? 'primary' : 'secondary'}
                    onClick={onClickHandler(_view)}
                >
                    {label}
                </Button>
            ))}
        </VStack>
    );
};
