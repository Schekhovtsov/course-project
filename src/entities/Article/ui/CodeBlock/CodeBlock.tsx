import { memo } from 'react';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/Article';

interface CodeBlockProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const CodeBlock = memo(({ className, block }: CodeBlockProps) => (
    <Code className={className} text={block.code} />
));
