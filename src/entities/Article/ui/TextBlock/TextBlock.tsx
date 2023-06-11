import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/Article';
import styles from './TextBlock.module.scss';

interface TextBlockProps {
    className?: string;
    block: ArticleTextBlock;
    withoutTitle?: boolean;
}

export const TextBlock = memo(
    ({ className, block, withoutTitle = false }: TextBlockProps) => {
        const { paragraphs, title } = block;

        return (
            <div className={classNames(styles.container, {}, [className])}>
                {!withoutTitle
                    ? block.title && (
                          <h1>
                              <Text title={title} className={styles.title} />
                          </h1>
                      )
                    : null}

                {paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={styles.paragraph}
                    />
                ))}
            </div>
        );
    }
);
