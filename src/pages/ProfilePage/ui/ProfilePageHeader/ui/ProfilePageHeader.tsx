import {
    profileActions,
    selectProfile,
    selectReadOnlyStatus,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { selectUserAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

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
        <div className={classNames(styles.container, {}, [className])}>
            <Text title={t('Profile page')} />
            <div className={styles.buttons}>
                {canEdit ? (
                    <div>
                        {!readOnly ? (
                            <>
                                <Button
                                    theme={ButtonTheme.SECONDARY}
                                    onClick={cancelButtonHandler}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button onClick={saveButtonHandler}>
                                    {t('Save')}
                                </Button>
                            </>
                        ) : (
                            <Button onClick={editButtonHandler}>
                                {t('Edit')}
                            </Button>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
};
