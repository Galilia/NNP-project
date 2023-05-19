import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
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

        // TODO remove ts after redesign
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
                // @ts-ignore
                off={() => undefined}
            />
        );
    },
);
