/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { ArticleBlock } from '../../model/types/Article';
import {
    selectArticle,
    selectError,
    selectIsLoading,
} from '../../model/selector/articleSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import styles from './Article.module.scss';
import { TextBlock } from '../TextBlock/TextBlock';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { ImageBlock } from '../ImageBlock/ImageBlock';

interface ArticleProps {
    className?: string;
    id: string;
}

export const Article = memo(({ className, id }: ArticleProps) => {
    const dispatch = useAppDispatch();
    // const { t } = useTranslation();

    const isLoading = useSelector(selectIsLoading);
    const data = useSelector(selectArticle);
    const error = useSelector(selectError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block: ArticleBlock, index: number) => {
        switch (block.type) {
            case 'TEXT':
                return <TextBlock key={`${block.id}_${index}`} block={block} />;
            case 'CODE':
                return <CodeBlock key={`${block.id}_${index}`} block={block} />;
            case 'IMAGE':
                return (
                    <ImageBlock key={`${block.id}_${index}`} block={block} />
                );
            default:
                return null;
        }
    }, []);

    let content;
    if (isLoading) {
        content = (
            <div>
                <Skeleton width="100%" height="50px" />
                <Skeleton width="100%" height="200px" />
                <Skeleton width="100%" height="700px" />
            </div>
        );
    } else if (error) {
        content = <Text title={error} theme={TextTheme.ERROR} />;
    } else if (data) {
        content = (
            <div className={styles.blocks}>
                <h1>{data.title}</h1>
                <span>{data.description}</span>
                <img
                    src={data.img}
                    alt={data.title}
                    className={styles.mainImage}
                />
                {data.blocks?.map((block, index) => renderBlock(block, index))}
            </div>
        );
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {content}
        </div>
    );
});
