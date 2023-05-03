import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Drawer } from '@/shared/ui/Drawer';
import { InputWithCaret } from '@/shared/ui/InputWithCaret';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';

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
        <>
            <Text title={feedbackTitle} />
            <InputWithCaret
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your feedback')}
                data-testid="RatingCard.Input"
            />
        </>
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            fullWidth
            data-testid="RatingCard"
        >
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Thanks for feedback!') : title} />
                <StarRating
                    selectedStars={rate}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack gap="32">
                        {ModalContent}
                        <Button
                            onClick={acceptHandler}
                            size={ButtonSize.L}
                            fullWidth
                            data-testid="RatingCard.Send"
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32" max>
                        {ModalContent}
                        <HStack gap="16" max justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={cancelHandler}
                                data-testid="RatingCard.Close"
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
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
