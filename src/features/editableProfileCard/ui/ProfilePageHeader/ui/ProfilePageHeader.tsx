import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    selectProfile,
    selectReadOnlyStatus,
} from '../../../model/selector/profileSelectors';
import { updateProfileData } from '../../../model/services/updateProfileData';
import { profileActions } from '../../../model/slice/profileSlice';

import styles from './ProfilePageHeader.module.scss';

import { selectUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profilePage');
    const readOnly = useSelector(selectReadOnlyStatus);

    const authData = useSelector(selectUserAuthData);
    const profileData = useSelector(selectProfile);

    const canEdit = authData?.id === profileData?.id;

    const editButtonHandler = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const saveButtonHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const cancelButtonHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    return (
        <HStack
            justify="between"
            max
            className={classNames(styles.container, {}, [className])}
        >
            <Text title={`${t('Profile page')}`} />
            {canEdit ? (
                <HStack>
                    {!readOnly ? (
                        <>
                            <Button
                                theme={ButtonTheme.SECONDARY}
                                onClick={cancelButtonHandler}
                                data-testid="ProfilePageHeader.CancelButton"
                            >
                                {`${t('Cancel')}`}
                            </Button>
                            <Button
                                onClick={saveButtonHandler}
                                data-testid="ProfilePageHeader.SaveButton"
                            >
                                {`${t('Save')}`}
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={editButtonHandler}
                            data-testid="ProfilePageHeader.EditButton"
                        >
                            {`${t('Edit')}`}
                        </Button>
                    )}
                </HStack>
            ) : null}
        </HStack>
    );
};
