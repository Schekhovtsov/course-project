import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/profile/EditableProfileCard';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page
            data-testid="Profile page"
            className={classNames(styles.container, {}, [className])}
        >
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
