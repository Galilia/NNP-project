import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

import cls from './PortfolioProjects.module.scss';

const projects = [
    {
        img: 'src/shared/assets/images/Amdocs.png',
        title: 'Catalog One',
        company: 'Amdocs',
        description:
            "You know the IKEA catalog, right? It's a comprehensive book that showcases\n" +
            'everything they sell in one place.\n' +
            'Similarly, operators like Golan, HOT, T-Mobile, Vodafone also need \n' +
            'a catalog to define and showcase everything they offer to their customers. \n' +
            'Catalog One is a cloud-native solution built using microservices technology. It \n' +
            'enables operators to streamline their processes and significantly reduce time to\n' +
            'market for their products and services.',
        stack: ': React, Redux, JavaScript, Unit testing, Webpack, Jenkins, Jira, Nodejs',
        website:
            'https://www.amdocs.com/sites/default/files/2021-07/amdocs-catalogONE-brochure.pdf',
    },
    {
        img: 'src/shared/assets/images/M365-2.png',
        title: 'Microsoft 365 Defender',
        company: 'Microsoft',
        description:
            'Microsoft 365 Defender is a unified pre- and post-breach\n' +
            'enterprise defense suite that natively coordinates detection,\n' +
            'prevention, investigation, and response across endpoints,\n' +
            'identities, email, and applications to provide integrated\n' +
            'protection against sophisticated attacks.\n' +
            '\n' +
            'Made with React, Typescript and modern FrontEnd technologies.\n',
        stack: ': React, Redux, Angular 8, Typescript, JavaScript, Webpack, i18n, A11y tools',
        website:
            'https://www.microsoft.com/en-ww/security/business/siem-and-xdr/microsoft-defender-office-365?market=il',
    },
    {
        img: 'src/shared/assets/images/photoIlia.jpg',
        title: 'Personal Project',
        description:
            'React based website made with Webpack\n' +
            'build tool. Includes Lazy loading,\n' +
            'light/dark theme switcher,\n' +
            'internationalization and additional\n' +
            'dependencies such as react-scroll,\n' +
            'react-icons, and integration with EmailJs.\n' +
            'App architecture is based on Feature-Sliced\n' +
            'Design',
        stack:
            ': React, Typescript, Redux, SCSS, Webpack, Babel, Eslint,\n' +
            'Storybook, CI/CD, FSD, i18n, Unit Testing, Cypress',
        github: 'https://github.com/Galilia/nnp-react-app',
    },
];

interface LatestProjectsProps {
    className?: string;
}

export const PortfolioProjects = ({ className }: LatestProjectsProps) => {
    const { t } = useTranslation('main');

    return (
        <div
            className={classNames(cls.LatestProjects, {}, [className])}
            id="projects"
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
                                className={cls.image}
                            />
                        </div>
                        <div className={cls.descriptionContainer}>
                            <h3 className={cls.headerContainer}>
                                {project.title}
                            </h3>
                            {project.company && (
                                <h3 className={cls.headerContainer}>
                                    {project.company}
                                </h3>
                            )}
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
                                    href={project.website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        theme={ButtonTheme.BACKGROUND_INVERTED}
                                    >
                                        {t('Visit Website')}
                                    </Button>
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
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
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
