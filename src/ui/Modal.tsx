
import React, { useState } from 'react';

import './Modal.module.scss';

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalRef = React.useRef(null); // Create a ref for the modal element
    
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleClickOutside = (event: any) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            closeModal();
        }
    };

    // Close the modal when the user clicks outside
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    return (
        <div className="modal">
            <button className="modal-btn-open" onClick={openModal}>Open Modal</button>

            {isOpen && (
                <div ref={modalRef} className="modal-content">
                    <p>Modal content</p>
                    <button className='modal-btn-close' onClick={closeModal}>&times;</button>
                </div>
            )}
        </div>
    );
};  

export default Modal;