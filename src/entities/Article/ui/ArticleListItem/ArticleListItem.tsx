import { HTMLAttributeAnchorTarget, memo } from 'react';
import { LS_ARTICLES_LIST_ITEM_ID } from '@/shared/constants/localStorage';
import { getRouteArticle } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import {
    ArticleTextBlock,
    ArticleType,
    ArticleViewType,
} from '../../model/types/Article';
import { TextBlock } from '../../ui/TextBlock/TextBlock';

import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: ArticleType;
    view: ArticleViewType;
    target: HTMLAttributeAnchorTarget;
    index: number;
}

export const ArticleListItem = memo(
    ({ className, article, view, target, index }: ArticleListItemProps) => {
        const handleOpenArticle = () => {
            sessionStorage.setItem(
                LS_ARTICLES_LIST_ITEM_ID,
                JSON.stringify(index)
            );
        };

        const infoWrapper = (
            <div className={styles.infoWrapper}>
                <div className={styles.tags}>
                    {article.tags.map((tag) => (
                        <div
                            key={`${article.id}_${tag}`}
                            className={styles.tag}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <Text
                    title={article.title}
                    bold
                    className={styles.title}
                    withTitle
                />
            </div>
        );

        if (view === 'tile') {
            return (
                <div
                    data-testid="Article list item"
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <AppLink
                        target={target}
                        to={getRouteArticle(article.id)}
                        onClick={handleOpenArticle}
                    >
                        <Card className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <AppImage
                                    fallback={
                                        <Skeleton width={300} height={300} />
                                    }
                                    src={article.img}
                                    alt={article.title}
                                    width={300}
                                    height={300}
                                    className={styles.image}
                                />
                                <Text
                                    text={article.createdAt}
                                    className={styles.createdAt}
                                />
                                {infoWrapper}
                            </div>
                        </Card>
                    </AppLink>
                </div>
            );
        }

        if (view === 'list') {
            const textBlock = article.blocks.find(
                (block) => block.type === 'TEXT'
            ) as ArticleTextBlock;

            return (
                <div
                    data-testid="Article list item"
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <AppLink
                        target={target}
                        to={getRouteArticle(article.id)}
                        onClick={handleOpenArticle}
                    >
                        <Card className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <AppImage
                                    fallback={
                                        <Skeleton width={300} height={300} />
                                    }
                                    src={article.img}
                                    alt={article.title}
                                    width={300}
                                    height={300}
                                    className={styles.image}
                                />
                                <div className={styles.author}>
                                    <Text
                                        text={article.createdAt}
                                        className={styles.createdAt}
                                    />
                                    <Avatar
                                        size={32}
                                        src={article.user.avatar!}
                                        className={styles.avatar}
                                    />
                                    <Text text={article.user.username} />
                                </div>
                                {infoWrapper}
                            </div>
                            <div className={styles.footer}>
                                {textBlock ? (
                                    <TextBlock
                                        block={textBlock}
                                        className={styles.textBlock}
                                        withoutTitle
                                    />
                                ) : null}
                            </div>
                        </Card>
                    </AppLink>
                </div>
            );
        }

        return null;
    }
);
