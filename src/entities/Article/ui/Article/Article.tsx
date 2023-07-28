/* eslint-disable indent */
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import {
    selectError,
    selectIsLoading,
    useSelectArticle,
} from '../../model/selector/articleSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { ArticleBlock } from '../../model/types/Article';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { ImageBlock } from '../ImageBlock/ImageBlock';
import { TextBlock } from '../TextBlock/TextBlock';

import styles from './Article.module.scss';

interface ArticleProps {
    className?: string;
    id?: string;
}

export const Article = memo(({ className, id }: ArticleProps) => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(selectIsLoading);
    const data = useSelectArticle();
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
            <VStack>
                <Skeleton width="100%" height="50px" />
                <Skeleton width="100%" height="200px" />
                <Skeleton width="100%" height="700px" />
            </VStack>
        );
    } else if (error) {
        content = <Text title={error} variant="error" />;
    } else if (data) {
        content = (
            <VStack max gap={30}>
                <Text title={data.title} className={styles.title} />
                <Text text={data.description} />
                <img
                    src={data.img}
                    alt={data.title}
                    className={styles.mainImage}
                />
                {data.blocks?.map((block, index) => renderBlock(block, index))}
            </VStack>
        );
    }

    return (
        <VStack
            data-testid="Article"
            max
            className={classNames(styles.container, {}, [className])}
        >
            {content}
        </VStack>
    );
});
