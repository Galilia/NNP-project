import React from 'react';

import { PortfolioScrollButtons } from '@/entities/Portfolio';
import {
    PortfolioAboutMe,
    PortfolioProjects,
    PortfolioSkills,
    PortfolioWorkTogether,
} from '@/features/Portfolio';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

// TODO MainPage and it's content are in development and redesign
const MainPage = () => {
    return (
        <Page
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [])}
        >
            <PortfolioScrollButtons />
            <PortfolioAboutMe />
            <PortfolioSkills />
            <PortfolioProjects />
            <PortfolioWorkTogether />
        </Page>
    );
};

export default MainPage;
