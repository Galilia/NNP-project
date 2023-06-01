import React from 'react';

import { PortfolioScrollButtons } from '@/entities/Portfolio';
import {
    PortfolioAboutMe,
    PortfolioProjects,
    PortfolioSkills,
    PortfolioWorkTogether,
} from '@/features/Portfolio';
import { MEDIUM_SCREEN_BREAKPOINT } from '@/shared/const/breakpoints';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Card } from '@/shared/ui/redesigned/Card';
import { ContactForm } from '@/widgets/ContactForm';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

// TODO MainPage and it's content are in development and redesign
const MainPage = () => {
    const isMobile = useDevice(MEDIUM_SCREEN_BREAKPOINT);

    return (
        <ToggleFeatures
            data-testid="MainPage"
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            data-testid="MainPage"
                            className={classNames(cls.MainPage, {}, [])}
                        >
                            <PortfolioAboutMe />
                            <PortfolioSkills />
                            <PortfolioProjects />
                            <PortfolioWorkTogether />
                            <ContactForm />
                        </Page>
                    }
                    right={
                        isMobile ? undefined : (
                            <Card
                                padding="24"
                                border="partial"
                                className={cls.card}
                            >
                                <PortfolioScrollButtons />
                            </Card>
                        )
                    }
                />
            }
            off={
                <Page
                    data-testid="MainPage"
                    className={classNames(cls.MainPage, {}, [])}
                >
                    <PortfolioAboutMe />
                    <PortfolioSkills />
                    <PortfolioProjects />
                    <PortfolioWorkTogether />
                    <ContactForm />
                </Page>
            }
        />
    );
};

export default MainPage;
