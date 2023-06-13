/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

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
                />
            </>
        );

        const modalButtons = (
            <>
                <Button onClick={onCloseHandler}>{`${t('Close')}`}</Button>
                <Button onClick={onAcceptHandler}>{`${t('Sent')}`}</Button>
            </>
        );

        return (
            <Card max className={classNames(styles.container, {}, [className])}>
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
