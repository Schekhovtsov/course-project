import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Text } from 'shared/ui/Text';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { HStack, VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input';
import { Avatar } from 'shared/ui/Avatar';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { ProfilePageHeader } from '../ProfilePageHeader';
import {
    selectError,
    selectIsLoading,
    selectProfile,
    selectReadOnlyStatus,
    selectValidateErrors,
} from '../../model/selector/profileSelectors';
import { ValidateProfileErrors } from '../../model/types/editableProfileCard';
import { fetchProfileData } from '../../model/services/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import styles from './EditableProfileCard.module.scss';

interface editableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo(
    ({ className, id }: editableProfileCardProps) => {
        const data = useSelector(selectProfile);
        const isLoading = useSelector(selectIsLoading);
        const error = useSelector(selectError);
        const validateErrors = useSelector(selectValidateErrors);

        useDynamicReducerLoader(reducers, false);

        const dispatch = useAppDispatch();
        const { t } = useTranslation('profilePage');
        const disabled = useSelector(selectReadOnlyStatus);

        const onFirstNameChangeHandler = (value?: string) => {
            dispatch(profileActions.updateProfile({ firstName: value ?? '' }));
        };

        const onLastNameChangeHandler = (value?: string) => {
            dispatch(profileActions.updateProfile({ lastName: value ?? '' }));
        };

        const onCityChangeHandler = (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }));
        };

        const onAvatarChangeHandler = (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value ?? '' }));
        };

        useInitialEffect(() => {
            if (id) {
                dispatch(fetchProfileData(id));
            }
        });

        if (isLoading) {
            return (
                <VStack
                    className={classNames(styles.container, {}, [
                        className,
                        styles.loading,
                    ])}
                >
                    <Loader />
                </VStack>
            );
        }

        if (error) {
            return (
                <VStack
                    className={classNames(styles.container, {}, [
                        className,
                        styles.error,
                    ])}
                >
                    <Text
                        title={t('Error')}
                        text={t('Try to refresh page')}
                        theme={TextTheme.ERROR}
                    />
                </VStack>
            );
        }

        const validateErrorTranslations = {
            [ValidateProfileErrors.INCORRECT_USER_DATA]: t(
                'Incorrect user data'
            ),
            [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
        };

        return (
            <>
                <ProfilePageHeader />
                {validateErrors?.length
                    ? validateErrors.map((error: any) => (
                          <Text
                              key={error}
                              theme={TextTheme.ERROR}
                              text={
                                  validateErrorTranslations[
                                      error as keyof typeof validateErrorTranslations
                                  ]
                              }
                          />
                      ))
                    : null}
                <VStack
                    className={classNames(styles.container, {}, [className])}
                >
                    <VStack justify="center" max className={styles.formWrapper}>
                        <HStack
                            max
                            justify="center"
                            className={styles.avatarWrapper}
                        >
                            {data?.avatar && (
                                <Avatar src={data?.avatar} size={128} />
                            )}
                        </HStack>
                        <VStack className={styles.form}>
                            <Input
                                value={data?.firstName}
                                placeholder={t('First name')}
                                disabled={disabled}
                                onChange={onFirstNameChangeHandler}
                            />
                            <Input
                                value={data?.lastName}
                                placeholder={t('Last name')}
                                disabled={disabled}
                                onChange={onLastNameChangeHandler}
                            />
                            <Input
                                value={data?.city}
                                placeholder={t('City')}
                                disabled={disabled}
                                onChange={onCityChangeHandler}
                            />
                            <Input
                                value={data?.avatar}
                                placeholder={t('Avatar')}
                                disabled={disabled}
                                onChange={onAvatarChangeHandler}
                            />
                        </VStack>
                    </VStack>
                </VStack>
            </>
        );
    }
);
