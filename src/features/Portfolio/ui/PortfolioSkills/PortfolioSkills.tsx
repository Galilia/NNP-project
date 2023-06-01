import { useTranslation } from 'react-i18next';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';

import cls from './PortfolioSkills.module.scss';
import { skills } from './skills';

interface LatestProjectsProps {
    className?: string;
}

// TODO PortfolioSkills and it's content are in development and redesign
export const PortfolioSkills = ({ className }: LatestProjectsProps) => {
    const { t } = useTranslation('portfolio');

    return (
        <div className={classNames(cls.skillsContent, {}, [className])}>
            <HeaderDescription header={t('skills_and_tools')} size="m" />
            <div className={cls.skillsWrapper}>
                {skills.map((skill, index) => (
                    <div className={cls.skillsItemWrapper} key={index}>
                        <div className={cls.skillsItemIcon}>{skill.icon}</div>
                        <h3 className={cls.skillsItemTitle}>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
