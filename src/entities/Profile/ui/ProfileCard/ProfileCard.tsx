import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import {
    selectProfile,
    selectError,
    selectIsLoading,
} from '../../model/selector/profileSelectors';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(selectProfile);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const { t } = useTranslation('profilePage');

    const editButtonHandler = () => {};

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Text title={t('Profile')} />
            <div className={styles.form}>
                <Input value={data?.firstName} placeholder={t('First name')} />
                <Input value={data?.lastName} placeholder={t('Last name')} />
                <Input value={data?.city} placeholder={t('City')} />
                <Button onClick={editButtonHandler}>{t('Edit')}</Button>
            </div>
        </div>
    );
};
