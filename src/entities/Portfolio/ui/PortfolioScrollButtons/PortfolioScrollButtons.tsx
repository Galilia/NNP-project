import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useScrollToElement } from '@/shared/lib/hooks/useScrollToElement/useScrollToElement';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

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
            <Card padding="24" border="partial" className={cls.card}>
                <VStack
                    gap="32"
                    justify="end"
                    className={classNames('', {}, [className])}
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
                </VStack>
            </Card>
        );
    },
);
