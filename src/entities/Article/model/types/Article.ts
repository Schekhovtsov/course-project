import { User } from '@/entities/User';

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE';

export interface ArticleBlockRoot {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockRoot {
    type: 'CODE';
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockRoot {
    type: 'IMAGE';
    title?: string;
    src: string;
}

export interface ArticleTextBlock extends ArticleBlockRoot {
    type: 'TEXT';
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock =
    | ArticleTextBlock
    | ArticleImageBlock
    | ArticleCodeBlock;

export type ArticleType = {
    id: string;
    user: User;
    title: string;
    description: string;
    img: string;
    createdAt: string;
    tags: string[];
    blocks: ArticleBlock[];
};

export interface ArticleSchema {
    isLoading: boolean;
    error?: string | null;
    data?: ArticleType | null;
}

export type ArticleViewType = 'tile' | 'list';
