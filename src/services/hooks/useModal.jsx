import { useEffect, useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [modalContent, setModelContent] = useState(null);

    const open = (content) => {
        setModelContent(content);
    };

    const close = () => {
        setModelContent(null)   
    };

    useEffect(()=>{
        if (modalContent){
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [modalContent])

    return { isOpen, open, close, modalContent };
};

export default useModal;
