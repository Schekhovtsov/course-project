/* eslint-disable no-unused-vars */
import { ChangeEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
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
    onCancel?: (startCount: number) => void;
    onAccept?: (startCount: number, feedback?: string) => void;
}

export const RatingCard = memo(
    ({
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onAccept,
        onCancel,
    }: RatingCardProps) => {
        const dispatch = useAppDispatch();
        const { t } = useTranslation();
        const { closeModal, isModalOpen, openModal } = useModal();
        const [startCount, setStartCount] = useState(0);
        const [feedback, setFeedback] = useState('');

        const onSelectStars = useCallback(
            (selectedStartCount: number) => {
                setStartCount(selectedStartCount);
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
            onAccept?.(startCount, feedback);
        }, [closeModal, feedback, onAccept, startCount]);

        const onCloseHandler = useCallback(() => {
            closeModal();
            onCancel?.(startCount);
        }, [closeModal, onCancel, startCount]);

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
            <Card className={classNames(styles.container, {}, [className])}>
                <VStack max>
                    <Text title={title} />
                    <StarRating onSelect={onSelectStars} />
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
