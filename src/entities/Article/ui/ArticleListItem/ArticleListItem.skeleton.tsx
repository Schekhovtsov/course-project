import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

import { ArticleViewType } from '../../model/types/Article';

import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleViewType;
}

export const ArticleListItemSkeleton = memo(
    ({ className, view }: ArticleListItemSkeletonProps) => {
        const infoWrapper = <div className={styles.infoWrapper} />;

        if (view === 'tile') {
            return (
                <div
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Skeleton width={250} height={250} />
                            {infoWrapper}
                        </div>
                    </Card>
                </div>
            );
        }

        if (view === 'list') {
            return (
                <div
                    className={classNames(styles.container, {}, [
                        className,
                        styles[view],
                    ])}
                >
                    <Card className={styles.card}>
                        <Skeleton
                            width="100%"
                            height={300}
                            borderRadius="16px"
                        />
                    </Card>
                </div>
            );
        }

        return null;
    }
);
