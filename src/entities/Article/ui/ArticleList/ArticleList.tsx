import {
    FC,
    HTMLAttributeAnchorTarget,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { LS_ARTICLES_LIST_ITEM_ID } from '@/shared/constants/localStorage';
import { classNames } from '@/shared/lib/classNames/classNames';

import { ArticleType, ArticleViewType } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton';

import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: ArticleType[];
    isLoading?: boolean;
    view?: ArticleViewType;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextBatch?: () => void;
}

const LoaderSkeleton: FC<{
    height: number;
    width: number;
    index: number;
}> = () => (
    <>
        <ArticleListItemSkeleton view="tile" />
        <ArticleListItemSkeleton view="tile" />
        <ArticleListItemSkeleton view="tile" />
    </>
);

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = 'list',
        target = '_self',
        onLoadNextBatch,
    }: ArticleListProps) => {
        const [selectedArticleId, setSelectedArticleId] = useState(1);
        const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

        useEffect(() => {
            const paged = sessionStorage.getItem(LS_ARTICLES_LIST_ITEM_ID) || 0;
            setSelectedArticleId(+paged);
        }, []);

        useEffect(() => {
            let timeoutId: NodeJS.Timeout;
            if (view === 'tile') {
                timeoutId = setTimeout(() => {
                    if (virtuosoGridRef.current) {
                        virtuosoGridRef.current.scrollToIndex(
                            selectedArticleId
                        );
                    }
                }, 100);
            }

            return () => {
                clearTimeout(timeoutId);
            };
        }, [selectedArticleId, view]);

        const renderArticle = (index: number, article: ArticleType) => (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                target={target}
                index={index}
            />
        );

        // eslint-disable-next-line react/no-unstable-nested-components
        const Footer = memo(() => {
            if (isLoading) {
                return (
                    <ArticleListItemSkeleton
                        className={styles.card}
                        view={view}
                    />
                );
            }

            return null;
        });

        return (
            <div
                data-testid="Article list"
                className={classNames(styles.container, {}, [
                    className,
                    styles[view],
                ])}
            >
                {view === 'list' ? (
                    <Virtuoso
                        className={styles.list}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextBatch}
                        initialTopMostItemIndex={selectedArticleId}
                        components={{ Footer }}
                    />
                ) : (
                    <VirtuosoGrid
                        ref={virtuosoGridRef}
                        style={{ height: '100%' }}
                        totalCount={articles.length}
                        components={{
                            ScrollSeekPlaceholder: LoaderSkeleton,
                        }}
                        endReached={onLoadNextBatch}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={styles.itemsWrapper}
                        scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 200,
                            exit: (velocity) => Math.abs(velocity) < 30,
                        }}
                    />
                )}
            </div>
        );
    }
);
