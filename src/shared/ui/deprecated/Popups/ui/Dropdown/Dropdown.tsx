/* eslint-disable i18next/no-literal-string */
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Menu } from '@headlessui/react';

import { AppLink } from '../../../../redesigned/AppLink';
import { mapDirectionClass } from '../../styles/popup.consts';

import popupStyles from '../../styles/popup.module.scss';
import styles from './Dropdown.module.scss';

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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

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
                {items.map((item, index) => {
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
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
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
                                key={item.href}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            disabled={item.disabled}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};
