import React from 'react';

import {
    PortfolioAboutMe,
    PortfolioProjects,
    PortfolioSkills,
    PortfolioWorkTogether,
} from '@/features/Portfolio';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

const MainPage = () => {
    return (
        <Page
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [])}
        >
            <PortfolioAboutMe />
            <PortfolioSkills />
            <PortfolioProjects />
            <PortfolioWorkTogether />
        </Page>
    );
};

export default MainPage;
