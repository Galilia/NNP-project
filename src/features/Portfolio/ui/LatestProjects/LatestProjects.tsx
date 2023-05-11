import { ForwardedRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

import cls from './LatestProjects.module.scss';

const projects = [
    {
        img: 'src/shared/assets/images/photoIlia.jpg',
        title: 'Personal Portfolio Website',
        description:
            '                                    React based portfolio website made with Vite\n' +
            '                                    build tool. Includes Lazy loading,\n' +
            '                                    light/dark theme switcher,\n' +
            '                                    internationalization and additional\n' +
            '                                    dependencies such as react-scroll,\n' +
            '                                    react-icons, and integration with EmailJs.\n' +
            '                                    App architecture is based on Feature-Sliced\n' +
            '                                    Design',
        stack: ': React, Javascript, CSS modules, Vite, FSD, i18n',
        linkToGit: '',
    },
    {
        img: 'src/shared/assets/images/photoIlia.jpg',
        title: 'Personal Portfolio Website',
        description:
            '                                    React based portfolio website made with Vite\n' +
            '                                    build tool. Includes Lazy loading,\n' +
            '                                    light/dark theme switcher,\n' +
            '                                    internationalization and additional\n' +
            '                                    dependencies such as react-scroll,\n' +
            '                                    react-icons, and integration with EmailJs.\n' +
            '                                    App architecture is based on Feature-Sliced\n' +
            '                                    Design',
        stack: ': React, Javascript, CSS modules, Vite, FSD, i18n',
        linkToGit: '',
    },
    {
        img: 'src/shared/assets/images/photoIlia.jpg',
        title: 'Personal Portfolio Website',
        description:
            '                                    React based portfolio website made with Vite\n' +
            '                                    build tool. Includes Lazy loading,\n' +
            '                                    light/dark theme switcher,\n' +
            '                                    internationalization and additional\n' +
            '                                    dependencies such as react-scroll,\n' +
            '                                    react-icons, and integration with EmailJs.\n' +
            '                                    App architecture is based on Feature-Sliced\n' +
            '                                    Design',
        stack: ': React, Javascript, CSS modules, Vite, FSD, i18n',
        linkToGit: '',
    },
];

interface LatestProjectsProps {
    className?: string;
}

export const LatestProjects = forwardRef<HTMLDivElement>(
    (
        // eslint-disable-next-line react/prop-types
        { className }: LatestProjectsProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const { t } = useTranslation('main');

        return (
            <div
                className={classNames(cls.LatestProjects, {}, [className])}
                ref={ref}
            >
                <div className={cls.sectionContent}>
                    <h2 className={cls.latestProjectsHeader}>
                        {t('Latest projects')}
                    </h2>
                    {projects.map((project, index) => (
                        <div className={cls.projectCard} key={index}>
                            <div className={cls.imageContainer}>
                                <img
                                    src={project.img}
                                    alt="Portfolio website view on different devices"
                                />
                            </div>
                            <div className={cls.descriptionContainer}>
                                <h3 className={cls.headerContainer}>
                                    {project.title}
                                </h3>
                                <p className={cls.paragraphContainer}>
                                    {project.description}
                                    <br />
                                    <br />
                                    <span className={cls.descriptionStack}>
                                        {t('STACK')}
                                    </span>
                                    {project.stack}
                                </p>
                                <div className={cls.descriptionButtonContainer}>
                                    <a
                                        href="https://ana-zhuravleva-portfolio.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button
                                            theme={
                                                ButtonTheme.BACKGROUND_INVERTED
                                            }
                                        >
                                            {t('Visit Website')}
                                        </Button>
                                    </a>
                                    <a
                                        href="https://github.com/meri-maki/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button
                                            theme={
                                                ButtonTheme.BACKGROUND_INVERTED
                                            }
                                        >
                                            {t('Show Git Repo')}
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    },
);
