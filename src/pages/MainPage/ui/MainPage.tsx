import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import {
    AboutMe,
    LatestProjects,
    SkillsTools,
    WorkTogether,
} from '@/features/Portfolio';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
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
            <HStack gap="32" max justify="end">
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={scrollToAboutMe}
                >
                    {t('About')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={scrollToLatestProjects}
                >
                    {t('Projects')}
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    className={cls.links}
                    onClick={scrollToWorkTogether}
                >
                    {t('Contact')}
                </Button>
            </HStack>

            <AboutMe ref={aboutMeRef} />
            <SkillsTools />
            <LatestProjects ref={latestProjectsRef} />
            <WorkTogether ref={workTogetherRef} />
        </Page>
    );
};

export default MainPage;
