import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import cls from './PortfolioScrollButtons.module.scss';

interface PortfolioScrollButtonsProps {
    className?: string;
}

export const PortfolioScrollButtons = memo(
    (props: PortfolioScrollButtonsProps) => {
        const { className } = props;
        const { t } = useTranslation('portfolio');

        const scrollToAboutMe = useScrollToElement('aboutMe');
        const scrollToProjects = useScrollToElement('projects');
        const scrollToContactMe = useScrollToElement('contactMe');

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <HStack
                        gap="32"
                        justify="end"
                        className={classNames(cls.PortfolioScrollButtons, {}, [
                            className,
                        ])}
                    >
                        <Button variant="clear" onClick={scrollToAboutMe}>
                            {t('About')}
                        </Button>
                        <Button variant="clear" onClick={scrollToProjects}>
                            {t('Projects')}
                        </Button>
                        <Button variant="clear" onClick={scrollToContactMe}>
                            {t('Contact')}
                        </Button>
                    </HStack>
                }
                off={
                    <HStack gap="32" justify="end">
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={scrollToAboutMe}
                        >
                            {t('About')}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={scrollToProjects}
                        >
                            {t('Projects')}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            theme={ButtonTheme.CLEAR_INVERTED}
                            className={cls.links}
                            onClick={scrollToContactMe}
                        >
                            {t('Contact')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        );
    },
);
