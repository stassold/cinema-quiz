import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ModalComponent.module.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (event: MouseEvent) => {
                if ((event.target as HTMLElement).classList.contains('modal')) {
                    onClose();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__overlay" onClick={onClose} />
            <div className="modal__content">{children}</div>
            <button className="modal__close" onClick={onClose}>
                &times;
            </button>
        </div>,
        document.body
    );
};

export default Modal;