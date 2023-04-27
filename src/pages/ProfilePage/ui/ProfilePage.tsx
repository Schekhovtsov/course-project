/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import {
    fetchProfileData,
    profileReducer,
    selectError,
    selectIsLoading,
    ValidateProfileErrors,
} from 'entities/Profile';
import {
    selectProfile,
    selectValidateErrors,
} from 'entities/Profile/model/selector/profileSelectors';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    ReducersList,
    useDynamicReducerLoader,
} from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();
    const data = useSelector(selectProfile);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const validateErrors = useSelector(selectValidateErrors);
    const { id } = useParams<{ id: string }>();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const validateErrorTranslations = {
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
    };

    useDynamicReducerLoader(reducers, false);

    return (
        <Page className={classNames(styles.container, {}, [className])}>
            <ProfileCard data={data} isLoading={isLoading} error={error} />
            {validateErrors?.length
                ? validateErrors.map((error) => (
                      <Text
                          key={error}
                          theme={TextTheme.ERROR}
                          text={validateErrorTranslations[error]}
                      />
                  ))
                : null}
        </Page>
    );
};

export default ProfilePage;
