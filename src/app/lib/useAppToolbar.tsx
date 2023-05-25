import { ReactElement } from 'react';

import { AppRoutes } from '@/shared/const/routerConst';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: Partial<Record<AppRoutes, ReactElement>> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
