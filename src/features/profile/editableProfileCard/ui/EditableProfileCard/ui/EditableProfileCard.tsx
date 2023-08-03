import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { ReducersList } from '@/shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { ValidateProfileErrors } from '../../../model/consts/consts';
import {
    selectError,
    selectIsLoading,
    selectProfile,
    selectReadOnlyStatus,
    selectValidateErrors,
} from '../../../model/selector/profileSelectors';
import { fetchProfileData } from '../../../model/services/fetchProfileData';
import {
    profileActions,
    profileReducer,
} from '../../../model/slice/profileSlice';
import { ProfilePageHeader } from '../../ProfilePageHeader';

import styles from './EditableProfileCard.module.scss';

interface editableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo(
    ({ className, id }: editableProfileCardProps) => {
        const data = useSelector(selectProfile);
        const error = useSelector(selectError);
        const validateErrors = useSelector(selectValidateErrors);

        useDynamicReducerLoader(reducers, false);

        const dispatch = useAppDispatch();
        const { t } = useTranslation('profilePage');
        const disabled = useSelector(selectReadOnlyStatus);
        const isLoading = useSelector(selectIsLoading);

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

        if (error) {
            return (
                <VStack
                    className={classNames(styles.container, {}, [
                        className,
                        styles.error,
                    ])}
                >
                    <Text
                        title={`${t('Error')}`}
                        text={`${t('Try to refresh page')}`}
                        variant="error"
                        data-testid="EditableProfileCard.Error"
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
                              variant="error"
                              text={
                                  validateErrorTranslations[
                                      error as keyof typeof validateErrorTranslations
                                  ]
                              }
                              data-testid="EditableProfileCard.Error"
                          />
                      ))
                    : null}
                <HStack
                    className={classNames(styles.container, {}, [className])}
                >
                    <div className={styles.avatarWrapper}>
                        {isLoading ? (
                            <Skeleton
                                width={128}
                                height={128}
                                borderRadius="100px"
                            />
                        ) : (
                            data?.avatar && (
                                <Avatar src={data?.avatar} size={128} />
                            )
                        )}
                    </div>
                    <VStack className={styles.form}>
                        <HStack>
                            <Text
                                text={`${t('First name')}`}
                                className={styles.inputTitle}
                            />
                            <Input
                                value={data?.firstName}
                                placeholder={`${t('First name')}`}
                                disabled={disabled}
                                onChange={onFirstNameChangeHandler}
                                data-testid="EditableProfileCard.FirstnameInput"
                                width={500}
                            />
                        </HStack>
                        <HStack>
                            <Text
                                text={`${t('Last name')}`}
                                className={styles.inputTitle}
                            />
                            <Input
                                value={data?.lastName}
                                placeholder={`${t('Last name')}`}
                                disabled={disabled}
                                onChange={onLastNameChangeHandler}
                                data-testid="EditableProfileCard.LastnameInput"
                                width={500}
                            />
                        </HStack>
                        <HStack>
                            <Text
                                text={`${t('City')}`}
                                className={styles.inputTitle}
                            />
                            <Input
                                value={data?.city}
                                placeholder={`${t('City')}`}
                                disabled={disabled}
                                onChange={onCityChangeHandler}
                                width={500}
                            />
                        </HStack>
                        <HStack>
                            <Text
                                text={`${t('Avatar')}`}
                                className={styles.inputTitle}
                            />
                            <Input
                                value={data?.avatar}
                                placeholder={`${t('Avatar')}`}
                                disabled={disabled}
                                onChange={onAvatarChangeHandler}
                                width={500}
                            />
                        </HStack>
                    </VStack>
                </HStack>
            </>
        );
    }
);
