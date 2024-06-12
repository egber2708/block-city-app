import PropTypes from 'prop-types';

import './modal.scss';

const Modal = (props) => {
    const {
        content,
        title,
        open,
        onClose,
        size = 'md',
        closeOnOverlay = true
    } = props;

    if (!open) {
        return null;
    }

    const onOverlayClose = () => {
        if (!closeOnOverlay) return;
        onClose();
    };

    const CloseButton = ({ onClose }) => {
        if (!onClose) return <></>;
        return (
            <div className="modal-header">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
            </div>
        );
    };

    return (
        <div className="modal-page">
            <div onClick={onOverlayClose} className="modal-overlay" />
            <div className={`modal-container modal__${size}`}>
                <CloseButton onClose={onClose} />
                <div className="modal-body">
                    <h2 className="modal-title">{title}</h2>
                    <div className="modal-content">{content}</div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    content: PropTypes.node,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    closeOnOverlay: PropTypes.bool
};

Modal.chekPropTypes = {
    content: null,
    onClose: null,
    size: 'md',
    closeOnOverlay: true
};

export default Modal;
