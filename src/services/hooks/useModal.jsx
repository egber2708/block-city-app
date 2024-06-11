import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [modalContent, setModelContent] = useState(null);

    const open = (content) => {
        setIsOpen(true);
        setModelContent(content);
    };

    const close = () => {
        setModelContent(null);
        setIsOpen(false);
    };

    return { isOpen, open, close, modalContent };
};

export default useModal;
