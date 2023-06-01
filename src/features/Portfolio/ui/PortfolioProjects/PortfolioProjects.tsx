import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Button } from '@/shared/ui/redesigned/Button';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';

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
                {PortfolioProjectsData().map((project, index) => {
                    let projectTitle = project.title;

                    if (project.company) {
                        projectTitle = `${project.title} (${project.company})`;
                    }

                    return (
                        <HStack
                            max
                            gap="4"
                            className={cls.projectCard}
                            key={index}
                        >
                            <AppImage
                                fallback={
                                    <Skeleton width="100%" height={250} />
                                }
                                src={project.img}
                                className={cls.image}
                                alt="Portfolio website view on different devices"
                            />
                            <div className={cls.descriptionContainer}>
                                <HeaderDescription
                                    header={projectTitle}
                                    size="m"
                                    description={project.description}
                                />
                                <HeaderDescription
                                    header={t('STACK')}
                                    color={cls.headerColor}
                                    description={project.stack}
                                    size="s"
                                />
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
                        </HStack>
                    );
                })}
            </div>
        </div>
    );
};
