import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { InputWithCaret } from '@/shared/ui/InputWithCaret/InputWithCaret';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string | null | undefined;
    feedbackTitle?: string | null | undefined;
    hasFeedback: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

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
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])} fullWidth>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Thanks for feedback!') : title} />
                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars} />
            </VStack>
            {isMobile
                ? (
                    <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                        <VStack gap="32">
                            {ModalContent}
                            <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth>
                                {t('Send')}
                            </Button>
                        </VStack>
                    </Drawer>
                )
                : (
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack gap="32" max>
                            {ModalContent}
                            <HStack gap="16" max justify="end">
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={cancelHandler}
                                >
                                    {t('Close')}
                                </Button>
                                <Button onClick={acceptHandler}>{t('Send')}</Button>
                            </HStack>
                        </VStack>
                    </Modal>
                )}
        </Card>
    );
});
