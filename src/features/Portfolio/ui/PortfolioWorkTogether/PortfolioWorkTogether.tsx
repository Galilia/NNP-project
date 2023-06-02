import { useTranslation } from 'react-i18next';
import { SiGithub, SiLinkedin, SiMaildotru, SiTelegram } from 'react-icons/si';

import React from '@/shared/assets/icons/portfolio/react.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './PortfolioWorkTogether.module.scss';

const linkInfoData = [
    { name: 'TG', icon: <SiTelegram />, href: 'https://t.me/sdirbiz' },
    {
        name: 'EMAIL',
        icon: <SiMaildotru />,
        href: 'mailto:iliagalperin@gmail.com',
    },
    { name: 'GITHUB', icon: <SiGithub />, href: 'https://github.com/galilia' },
    {
        name: 'LINKEDIN',
        icon: <SiLinkedin />,
        href: 'https://www.linkedin.com/in/ilia-galperin-24454882/',
    },
];

interface WorkTogetherProps {
    className?: string;
}

// TODO PortfolioWorkTogether and it's content are in development and redesign
export const PortfolioWorkTogether = ({ className }: WorkTogetherProps) => {
    const { t } = useTranslation('portfolio');

    return (
        <div
            id="contactMe"
            className={classNames(cls.WorkTogether, {}, [className])}
        >
            <HeaderDescription
                header={t('lets_work_together')}
                size="m"
                description={t('open_for_work')}
            />
            <VStack className={cls.sectionContactLinks}>
                <div className={cls.buttonContainer}>
                    <a
                        href="../../../../shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                        target="_blank"
                        download="Ilia_Galperin_FullStack_Developer_CV.pdf"
                        className={cls.sectionHref}
                    >
                        <Button variant="filled" color="link" font="bold">
                            {t('download_cv')}
                        </Button>
                    </a>
                </div>
                <div className={cls.linksWrapper}>
                    {linkInfoData.map((item, index) => (
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className={cls.sectionHref}
                            key={index}
                        >
                            <HStack max gap="16">
                                <div className={cls.icon}>{item.icon}</div>
                                <h3>{item.name}</h3>
                            </HStack>
                        </a>
                    ))}
                </div>
            </VStack>
        </div>
    );
};
