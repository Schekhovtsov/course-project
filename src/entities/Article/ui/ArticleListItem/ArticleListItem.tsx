import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { TextBlock } from 'entities/Article/ui/TextBlock/TextBlock';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    ArticleTextBlock,
    ArticleType,
    ArticleViewType,
} from '../../model/types/Article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: ArticleType;
    view: ArticleViewType;
}

export const ArticleListItem = memo(
    ({ className, article, view }: ArticleListItemProps) => {
        // eslint-disable-next-line no-unused-vars
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const { t } = useTranslation('articlePage');

        const onOpenArticle = useCallback(() => {
            navigate(`${RoutePath.articles}/${article.id}`);
        }, [article.id, navigate]);

        const infoWrapper = (
            <div className={styles.infoWrapper}>
                <div className={styles.tags}>
                    {article.tags.map((tag) => (
                        <div className={styles.tag}>{tag}</div>
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
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card} onClick={onOpenArticle}>
                        <div className={styles.imageWrapper}>
                            <img
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
                </div>
            );
        }

        if (view === 'list') {
            const textBlock = article.blocks.find(
                (block) => block.type === 'TEXT'
            ) as ArticleTextBlock;

            return (
                <div
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
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
                            <Button
                                onClick={onOpenArticle}
                                theme={ButtonTheme.SECONDARY}
                            >
                                {t('Read more')}
                            </Button>
                        </div>
                    </Card>
                </div>
            );
        }

        return null;
    }
);
