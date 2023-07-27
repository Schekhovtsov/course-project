import { ReactElement } from 'react';
import { ScrollToTopButton } from '@/features/ui/ScrollToTopButton';
import { AppRoutes } from '@/shared/constants/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export const useAppToolbar = () => {
    const currentRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToTopButton />,
        [AppRoutes.MAIN]: <div />,
    };

    return toolbarByAppRoute[currentRoute];
};
