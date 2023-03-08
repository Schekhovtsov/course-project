import { profileReducer } from 'entities/Profile';
import { Profile } from 'entities/Profile/ui/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
    ReducersList,
    useDynamicReducerLoader,
} from 'shared/lib/hooks/useDynamicReducerLoader/ui/useDynamicReducerLoader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    // eslint-disable-next-line no-unused-vars
    const { t } = useTranslation();

    useDynamicReducerLoader(reducers, false);
    return (
        <div className={classNames('', {}, [className])}>
            <Profile />
        </div>
    );
};

export default ProfilePage;
