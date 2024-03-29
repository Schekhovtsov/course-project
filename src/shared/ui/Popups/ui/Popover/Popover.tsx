import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { Popover as HeadlessPopover } from '@headlessui/react';

import { mapDirectionClass } from '../../styles/popup.consts';

import popupStyles from '../../styles/popup.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export const Popover = ({
    className,
    trigger,
    direction = 'bottom right',
    children,
}: PopoverProps) => {
    const panelClasses = [mapDirectionClass[direction], className];

    return (
        <HeadlessPopover className={classNames(popupStyles.container, {}, [])}>
            <HeadlessPopover.Button as="div" className={popupStyles.trigger}>
                {trigger}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel
                className={classNames(styles.panel, {}, panelClasses)}
            >
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
};
