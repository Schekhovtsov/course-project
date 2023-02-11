import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.linksContainer}>
                <AppLink to={'/'}>Main</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};
