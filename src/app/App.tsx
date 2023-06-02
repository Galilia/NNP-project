import React, { memo, Suspense, useEffect } from 'react';
import './styles/index.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entities/User';
import { MOBILE_TABLET_BREAKPOINT } from '@/shared/const/breakpoints';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { MainLayoutMobile } from '@/shared/layouts/MainLayoutMobile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';
import { AppRouter } from './providers/router';

const App = memo(() => {
    const { t } = useTranslation();

    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();
    const isMobile = useDevice(MOBILE_TABLET_BREAKPOINT);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        {isMobile ? (
                            <MainLayoutMobile
                                header={<Navbar />}
                                content={<AppRouter />}
                            />
                        ) : (
                            <MainLayout
                                content={<AppRouter />}
                                header={<Navbar />}
                                sidebar={<Sidebar />}
                                toolbar={toolbar}
                            />
                        )}
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
