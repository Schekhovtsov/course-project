import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ImageBlockProps {
    className?: string;
}

export const ImageBlock = memo(({ className }: ImageBlockProps) => {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation();

    return <div>{/* Content */}</div>;
});
