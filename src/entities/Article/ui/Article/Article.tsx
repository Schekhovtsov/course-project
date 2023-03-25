import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import {
    selectArticle,
    selectError,
    selectIsLoading,
} from '../../model/selector/articleSelectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import styles from './Article.module.scss';

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

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

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
            <div>
                <h1>{data.title}</h1>
            </div>
        );
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            {content}
        </div>
    );
});
