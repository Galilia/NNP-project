import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './AboutMe.module.scss';

interface AboutMeProps {
    className?: string;
}

export const AboutMe = ({ className }: AboutMeProps) => {
    const { t } = useTranslation('main');

    return (
        <HStack
            gap="8"
            max
            className={classNames(cls.AboutMe, {}, [className])}
        >
            <div className={cls.sectionAbout}>
                <h1 className={cls.aboutMeHeader}>
                    {t('Hey! I’m Ilia, FullStack JavaScript Developer')}
                </h1>
                <p>{t('about_me_description')}</p>
                <div className="button-container">
                    <a href="https://example.com">
                        <Button theme={ButtonTheme.BACKGROUND}>
                            {t('contact_me')}
                        </Button>
                    </a>
                    <a
                        href="src/shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                        target="_blank"
                        download="Ilia_Galperin_FullStack_Developer_CV.pdf"
                    >
                        <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                            {t('download_cv')}
                        </Button>
                    </a>
                </div>
            </div>
            <div className="aboutme-myphoto">
                <img
                    src="src/shared/assets/images/photoIlia.jpg"
                    className="_graphicGroup_jkj8c_9"
                    alt="collage"
                    draggable="false"
                />
            </div>
        </HStack>
    );
};
