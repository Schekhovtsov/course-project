/* eslint-disable i18next/no-literal-string */
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { AppLink } from '@/shared/ui/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import styles from './Dropdown.module.scss';
import popupStyles from '../../styles/popup.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = ({
    className,
    items,
    trigger,
    direction = 'bottom right',
}: DropdownProps) => {
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <Menu
            as="div"
            className={classNames(popupStyles.container, {}, [className])}
        >
            <Menu.Button className={popupStyles.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({
                        active,
                        disabled,
                    }: {
                        active: boolean;
                        disabled: boolean;
                    }) => (
                        <button
                            type="button"
                            className={classNames(styles.item, {
                                [popupStyles.active]: active,
                                [popupStyles.disabled]: disabled,
                            })}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
