import { Popover as HeadlessPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames';
import { mapDirectionClass } from '../../styles/consts';
import styles from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';

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
            <HeadlessPopover.Button className={popupStyles.trigger}>
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
