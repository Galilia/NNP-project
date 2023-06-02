import { useTranslation } from 'react-i18next';

import photoIlia from '@/shared/assets/images/photoIlia.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Button } from '@/shared/ui/redesigned/Button';
import { HeaderDescription } from '@/shared/ui/redesigned/HeaderDescription';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './PortfolioAboutMe.module.scss';

interface AboutMeProps {
    className?: string;
}

// TODO PortfolioAboutMe and it's content are in development and redesign
export const PortfolioAboutMe = ({ className }: AboutMeProps) => {
    const { t } = useTranslation('portfolio');
    const scrollToContactMe = useScrollToElement('contactMe');

    return (
        <HStack
            gap="8"
            max
            className={classNames(cls.AboutMe, {}, [className])}
            id="aboutMe"
        >
            <div className={cls.sectionAbout}>
                <HeaderDescription
                    header={t('fullStack_javaScript_developer')}
                    description={t('about_me_description')}
                    size="l"
                />
                <HStack gap="16">
                    <Button
                        variant="filled"
                        color="link"
                        font="bold"
                        onClick={scrollToContactMe}
                    >
                        {t('contact_me')}
                    </Button>
                    <a
                        href="../../../../shared/assets/pdf/Ilia_Galperin_FullStack_Developer_CV.pdf"
                        target="_blank"
                        download="Ilia_Galperin_FullStack_Developer_CV.pdf"
                    >
                        <Button variant="filled" color="link" font="bold">
                            {t('download_cv')}
                        </Button>
                    </a>
                </HStack>
            </div>
            <div className={cls.mainPhotoCollage}>
                <AppImage
                    fallback={<Skeleton width="100%" height={250} />}
                    src={photoIlia}
                    className={cls.aboutMePhoto}
                    alt="Ilia"
                />
            </div>
        </HStack>
    );
};
