import { useTranslation } from 'react-i18next';

import {
    AboutMe,
    LatestProjects,
    SkillsTools,
    WorkTogether,
} from '@/features/Portfolio';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [])}
        >
            <AboutMe />
            <SkillsTools />
            <LatestProjects />
            <WorkTogether />
        </Page>
    );
};

export default MainPage;
