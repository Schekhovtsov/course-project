import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement | null;
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
    if (element) {
        return createPortal(children, element);
    }
    return null;
};
