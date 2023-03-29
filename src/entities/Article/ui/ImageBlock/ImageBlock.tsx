import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import { ArticleImageBlock } from '../../model/types/Article';
import styles from './ImageBlock.module.scss';

interface ImageBlockProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ImageBlock = memo(({ className, block }: ImageBlockProps) => {
    const { src, title } = block;

    return (
        <div className={styles.container}>
            <img
                src={src}
                alt={title}
                className={classNames(styles.img, {}, [className])}
            />
            {title && <Text text={title} className={styles.title} />}
        </div>
    );
});
