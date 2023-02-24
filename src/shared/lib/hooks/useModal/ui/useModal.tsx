import { useCallback, useState } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return {
        isModalOpen: isOpen,
        openModal: openHandler,
        closeModal: closeHandler,
        toggleModal: toggle,
    };
};
