import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface PortfolioScrollButtonsProps {
    className?: string;
    onCloseDrawer?: () => void;
}

export const PortfolioScrollButtons = memo(
    (props: PortfolioScrollButtonsProps) => {
        const { className, onCloseDrawer } = props;
        const { t } = useTranslation('portfolio');

        const scrollToAboutMe = useScrollToElement('aboutMe', onCloseDrawer);
        const scrollToProjects = useScrollToElement('projects', onCloseDrawer);
        const scrollToContactMe = useScrollToElement(
            'contactMe',
            onCloseDrawer,
        );

        return (
            <VStack
                gap="32"
                justify="end"
                align="center"
                className={classNames('', {}, [className])}
            >
                <Button variant="clear" onClick={scrollToAboutMe} font="bold">
                    {t('About')}
                </Button>
                <Button variant="clear" onClick={scrollToProjects} font="bold">
                    {t('Projects')}
                </Button>
                <Button variant="clear" onClick={scrollToContactMe} font="bold">
                    {t('Contact')}
                </Button>
            </VStack>
        );
    },
);
