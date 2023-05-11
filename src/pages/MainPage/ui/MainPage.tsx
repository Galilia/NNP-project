import { useCallback, useRef } from 'react';
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
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const latestProjectsRef = useRef<HTMLDivElement>(null);
    const workTogetherRef = useRef<HTMLDivElement>(null);

    const scrollToAboutMe = useCallback(() => {
        aboutMeRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, []);

    const scrollToLatestProjects = useCallback(() => {
        latestProjectsRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, []);
    const scrollToWorkTogether = useCallback(() => {
        workTogetherRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }, []);

    return (
        <Page
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [])}
        >
            {/* <Button onClick={scrollToAboutMe}>Scroll to About Me</Button> */}
            {/* <Button onClick={scrollToLatestProjects}> */}
            {/*     Scroll to Latest Projects */}
            {/* </Button> */}
            {/* <Button onClick={scrollToWorkTogether}> */}
            {/*     Scroll to Work Together */}
            {/* </Button> */}

            <AboutMe ref={aboutMeRef} onScroll={scrollToWorkTogether} />
            <SkillsTools />
            <LatestProjects
                ref={latestProjectsRef}
                onScroll={scrollToLatestProjects}
            />
            <WorkTogether
                ref={workTogetherRef}
                onScroll={scrollToWorkTogether}
            />
        </Page>
    );
};

export default MainPage;
