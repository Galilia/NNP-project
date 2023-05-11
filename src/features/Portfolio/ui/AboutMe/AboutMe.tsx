import { ForwardedRef, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

import cls from './AboutMe.module.scss';

interface AboutMeProps {
    className?: string;
    onScroll?: () => void;
}

export const AboutMe = forwardRef<HTMLDivElement>(
    (
        // eslint-disable-next-line react/prop-types
        { className, onScroll }: AboutMeProps,
        ref: ForwardedRef<HTMLDivElement>,
    ) => {
        const { t } = useTranslation('main');

        return (
            <HStack
                gap="8"
                max
                className={classNames(cls.AboutMe, {}, [className])}
            >
                <div id="work-together" className={cls.sectionAbout} ref={ref}>
                    <h1 className={cls.aboutMeHeader}>
                        {t('Hey! I’m Ilia, FullStack JavaScript Developer')}
                    </h1>
                    <p className={cls.sectionDescription}>
                        {t('about_me_description')}
                    </p>
                    <div className={cls.sectionButton}>
                        <Button
                            theme={ButtonTheme.BACKGROUND}
                            onClick={onScroll}
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
    },
);
