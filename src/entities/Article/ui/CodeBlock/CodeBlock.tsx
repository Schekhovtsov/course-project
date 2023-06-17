import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/Article';

import { Code } from '@/shared/ui/Code';

interface CodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const CodeBlock = memo(({ className, block }: CodeBlockProps) => (
    <Code className={className} text={block.code} />
));
