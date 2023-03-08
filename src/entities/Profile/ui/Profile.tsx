import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

interface ProfileProps {
    className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
    const { t } = useTranslation('profilePage');

    return (
        <div className={classNames('', {}, [className])}>
            {t('Profile page')}
        </div>
    );
};
