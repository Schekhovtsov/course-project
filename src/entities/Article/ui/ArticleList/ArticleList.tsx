import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItem.skeleton';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleType, ArticleViewType } from '../../model/types/Article';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: ArticleType[];
    isLoading?: boolean;
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewType) =>
    new Array(view === 'tile' ? 12 : 3).fill(0).map((_, index) => (
        <ArticleListItemSkeleton
            className={styles.card}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            view={view}
        />
    ));

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = 'list',
        target = '_self',
    }: ArticleListProps) => {
        const renderArticle = (article: ArticleType) => (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                target={target}
            />
        );

        return (
            <div
                className={classNames(styles.container, {}, [
                    className,
                    styles[view],
                ])}
            >
                {articles.length ? articles.map(renderArticle) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);
