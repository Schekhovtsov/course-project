/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import styles from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rating?: number;
}

export const RatingCard = memo(
    ({
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
        rating = 0,
    }: RatingCardProps) => {
        const { t } = useTranslation();
        const { closeModal, isModalOpen, openModal } = useModal();
        const [starsCount, setStarsCount] = useState(rating);
        const [feedback, setFeedback] = useState('');

        const onSelectStars = useCallback(
            (selectedStartCount: number) => {
                setStarsCount(selectedStartCount);
                if (hasFeedback) {
                    openModal();
                } else {
                    onAccept?.(selectedStartCount);
                }
                openModal();
            },
            [hasFeedback, onAccept, openModal]
        );

        const onAcceptHandler = useCallback(() => {
            closeModal();
            onAccept?.(starsCount, feedback);
        }, [closeModal, feedback, onAccept, starsCount]);

        const onCloseHandler = useCallback(() => {
            closeModal();
            onCancel?.(starsCount);
        }, [closeModal, onCancel, starsCount]);

        const modalContent = (
            <>
                <Text title={feedbackTitle} />
                <Input
                    placeholder={`${t('Leave your messsage')}`}
                    value={feedback}
                    onChange={setFeedback}
                    data-testid="RatingCard.Input"
                />
            </>
        );

        const modalButtons = (
            <>
                <Button onClick={onCloseHandler} data-testid="RatingCard.Close">
                    {`${t('Close')}`}
                </Button>
                <Button onClick={onAcceptHandler} data-testid="RatingCard.Sent">
                    {`${t('Sent')}`}
                </Button>
            </>
        );

        return (
            <Card
                data-testid="RatingCard"
                max
                className={classNames(styles.container, {}, [className])}
            >
                <VStack className={styles.container} max>
                    <Text title={starsCount ? 'Thank you' : title} />
                    <StarRating
                        selectedStars={starsCount}
                        onSelect={onSelectStars}
                    />
                </VStack>
                <BrowserView>
                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                        <VStack max gap={30}>
                            {modalContent}
                            <HStack max gap={15} justify="end">
                                {modalButtons}
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} onClose={closeModal}>
                        {modalContent}
                        <VStack max gap={15} justify="end">
                            {modalButtons}
                        </VStack>
                    </Drawer>
                </MobileView>
            </Card>
        );
    }
);
