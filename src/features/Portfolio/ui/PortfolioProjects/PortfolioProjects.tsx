import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';

import cls from './PortfolioProjects.module.scss';
import { PortfolioProjectsData } from './PortfolioProjectsData';

interface LatestProjectsProps {
    className?: string;
}

// TODO PortfolioProjects and it's content are in development and redesign
export const PortfolioProjects = ({ className }: LatestProjectsProps) => {
    const { t } = useTranslation('portfolio');

    return (
        <div
            className={classNames(cls.LatestProjects, {}, [className])}
            id="projects"
        >
            <div className={cls.sectionContent}>
                <HeaderDescription header={t('Latest projects')} size="m" />
                {PortfolioProjectsData().map((project, index) => (
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
                                    <Button variant="filled">
                                        {t('Visit Website')}
                                    </Button>
                                </a>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Button variant="filled">
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
