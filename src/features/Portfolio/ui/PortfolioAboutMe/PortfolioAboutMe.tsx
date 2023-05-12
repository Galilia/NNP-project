import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './PortfolioAboutMe.module.scss';

interface AboutMeProps {
    className?: string;
}

export const PortfolioAboutMe = ({ className }: AboutMeProps) => {
    const { t } = useTranslation('main');
    const scrollToContactMe = useScrollToElement('contactMe');

    return (
        <HStack
            gap="8"
            max
            className={classNames(cls.AboutMe, {}, [className])}
            id="aboutMe"
        >
            <div className={cls.sectionAbout}>
                <h1 className={cls.aboutMeHeader}>
                    {t('Hey! I’m Ilia, FullStack JavaScript Developer')}
                </h1>
                <p className={cls.sectionDescription}>
                    {t('about_me_description')}
                </p>
                <div className={cls.sectionButton}>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        onClick={scrollToContactMe}
                    >
                        {t('contact_me')}
                    </Button>
                    <a
                        href="../../../../shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                        target="_blank"
                        download="Ilia_Galperin_FullStack_Developer_CV.pdf"
                    >
                        <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                            {t('download_cv')}
                        </Button>
                    </a>
                </div>
            </div>
            <div className={cls.aboutMePhoto}>
                <img
                    src="src/shared/assets/images/photoIlia.jpg"
                    alt="collage"
                    draggable="false"
                />
            </div>
        </HStack>
    );
};
