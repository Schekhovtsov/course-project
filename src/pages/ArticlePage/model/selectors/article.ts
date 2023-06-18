import { selectArticle } from '@/entities/Article';
import { selectUserAuthData } from '@/entities/User';
import { createSelector } from '@reduxjs/toolkit';

export const selectCanEditArticle = createSelector(
    selectArticle,
    selectUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article?.user.id === user?.id;
    }
);
