import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { VStack, HStack } from 'shared/ui/Stack';
import { selectReadOnlyStatus } from '../../model/selector/profileSelectors';
import { Profile } from '../../model/types/profile';
import { profileActions } from '../../model/slice/profileSlice';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile | null;
    isLoading?: boolean;
    error?: string | null;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
}: ProfileCardProps) => {
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

    return (
        <VStack className={classNames(styles.container, {}, [className])}>
            <ProfilePageHeader />
            <VStack justify="center" max className={styles.formWrapper}>
                <HStack max justify="center" className={styles.avatarWrapper}>
                    {data?.avatar && <Avatar src={data?.avatar} size={128} />}
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
    );
};
