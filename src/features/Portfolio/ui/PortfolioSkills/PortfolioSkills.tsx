import { useTranslation } from 'react-i18next';

import CSS3 from '@/shared/assets/icons/portfolio/css3.svg';
import Eslint from '@/shared/assets/icons/portfolio/eslint.svg';
import Figma from '@/shared/assets/icons/portfolio/figma.svg';
import GIT from '@/shared/assets/icons/portfolio/git.svg';
import HTML5 from '@/shared/assets/icons/portfolio/html5.svg';
import JavaScript from '@/shared/assets/icons/portfolio/javascript.svg';
import Jest from '@/shared/assets/icons/portfolio/jest.svg';
import Jira from '@/shared/assets/icons/portfolio/jira.svg';
import AdobePS from '@/shared/assets/icons/portfolio/ps.svg';
import React from '@/shared/assets/icons/portfolio/react.svg';
import Redux from '@/shared/assets/icons/portfolio/redux.svg';
import Responsive from '@/shared/assets/icons/portfolio/responsive.svg';
import RESTAPI from '@/shared/assets/icons/portfolio/restapi.svg';
import Router from '@/shared/assets/icons/portfolio/router.svg';
import Storybook from '@/shared/assets/icons/portfolio/storybook.svg';
import TypeScript from '@/shared/assets/icons/portfolio/typescript.svg';
import VSCode from '@/shared/assets/icons/portfolio/vscode.svg';
import Webpack from '@/shared/assets/icons/portfolio/webpack.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';

import cls from './PortfolioSkills.module.scss';

interface LatestProjectsProps {
    className?: string;
}

const FILL_COLOR_RED = '#c85454';
const FILL_COLOR_GREEN = '#009379';

const skillsData = [
    { icon: HTML5, title: 'HTML5', color: FILL_COLOR_RED },
    { icon: CSS3, title: 'CSS3', color: FILL_COLOR_GREEN },
    { icon: JavaScript, title: 'JavaScript', color: FILL_COLOR_RED },
    { icon: TypeScript, title: 'TypeScript', color: FILL_COLOR_GREEN },
    { icon: RESTAPI, title: 'REST API', color: FILL_COLOR_RED },
    { icon: React, title: 'React', color: FILL_COLOR_GREEN },
    { icon: Router, title: 'Router', color: FILL_COLOR_RED },
    { icon: Redux, title: 'Redux', color: FILL_COLOR_GREEN },
    { icon: Webpack, title: 'Webpack', color: FILL_COLOR_RED },
    { icon: Eslint, title: 'Eslint', color: FILL_COLOR_GREEN },
    { icon: Jest, title: 'Jest', color: FILL_COLOR_RED },
    { icon: Storybook, title: 'Storybook', color: FILL_COLOR_GREEN },
    { icon: Responsive, title: 'Responsive Websites', color: FILL_COLOR_RED },
    { icon: VSCode, title: 'VS Code', color: FILL_COLOR_GREEN },
    { icon: GIT, title: 'GIT', color: FILL_COLOR_RED },
    { icon: Jira, title: 'Jira', color: FILL_COLOR_GREEN },
    { icon: Figma, title: 'Figma', color: FILL_COLOR_RED },
    { icon: AdobePS, title: 'Adobe PS', color: FILL_COLOR_GREEN },
];

// TODO PortfolioSkills and it's content are in development and redesign
export const PortfolioSkills = ({ className }: LatestProjectsProps) => {
    const { t } = useTranslation('main');

    return (
        <div className={classNames(cls.LatestProjects, {}, [className])}>
            <div className={cls.skillsContent}>
                <h2 className={cls.skillsHeader}>{t('skills_and_tools')}</h2>
                <div>
                    <div className={cls.skillsWrapper}>
                        {skillsData.map((skill, index) => (
                            <div className={cls.skillsItemWrapper} key={index}>
                                <div className={cls.skillsItemIcon}>
                                    <Icon
                                        Svg={skill.icon}
                                        style={{ fill: skill.color }}
                                    />
                                </div>
                                <h3 className={cls.skillsItemTitle}>
                                    {skill.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
