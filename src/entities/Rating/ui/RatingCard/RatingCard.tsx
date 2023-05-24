import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { InputWithCaret } from '@/shared/ui/deprecated/InputWithCaret';
import { Text as TextDepreacetd } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const ModalContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        data-testid="RatingCard.Input"
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                    />
                </>
            }
            off={
                <>
                    <TextDepreacetd title={feedbackTitle} />
                    <InputWithCaret
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Your feedback')}
                        data-testid="RatingCard.Input"
                    />
                </>
            }
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={
                                starsCount ? t('Thanks for feedback!') : title
                            }
                        />
                    }
                    off={
                        <TextDepreacetd
                            title={
                                starsCount ? t('Thanks for feedback!') : title
                            }
                        />
                    }
                />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack gap="32">
                        {ModalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <HStack max gap="16" justify="end">
                                    <Button
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                    >
                                        {t('Close')}
                                    </Button>
                                    <Button
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Send')}
                                    </Button>
                                </HStack>
                            }
                            off={
                                <HStack max gap="16" justify="end">
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Close"
                                        onClick={cancelHandler}
                                        theme={ButtonTheme.OUTLINE_RED}
                                    >
                                        {t('Close')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        data-testid="RatingCard.Send"
                                        onClick={acceptHandler}
                                    >
                                        {t('Send')}
                                    </ButtonDeprecated>
                                </HStack>
                            }
                        />
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {ModalContent}
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            on={
                                <Button
                                    fullWidth
                                    onClick={acceptHandler}
                                    size="l"
                                >
                                    {t('Send')}
                                </Button>
                            }
                            off={
                                <ButtonDeprecated
                                    fullWidth
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                >
                                    {t('Send')}
                                </ButtonDeprecated>
                            }
                        />
                    </VStack>
                </Modal>
            )}
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card fullWidth border="round" padding="24">
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={className}
                    fullWidth
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
});
