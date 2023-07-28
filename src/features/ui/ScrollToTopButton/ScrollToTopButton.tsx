import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import scrollTopIcon from '@/shared/assets/icons/scrollTop.svg';
import { Icon } from '@/shared/ui/Icon';

export const ScrollToTopButton = memo(() => {
    const { t } = useTranslation();

    const onClickHandler = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            Svg={scrollTopIcon}
            clickable
            title={`${t('Scroll top')}`}
            onClick={onClickHandler}
            width={48}
            height={48}
            style={{ transform: 'rotate(-90deg)' }}
        />
    );
});
