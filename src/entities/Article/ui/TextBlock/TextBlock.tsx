import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/Article';
import styles from './TextBlock.module.scss';

interface TextBlockProps {
    className?: string;
    block: ArticleTextBlock;
}

export const TextBlock = memo(({ className, block }: TextBlockProps) => {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation();
    const { paragraphs, title } = block;

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <h1>{block.title && <Text title={title} className={styles.title} />}</h1>
            {paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={styles.paragraph}
                />
            ))}
        </div>
    );
});
