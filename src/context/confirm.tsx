import React, {createContext, useContext, useState} from 'react';

const Confirm = createContext();

export function useConfirm() {
    return useContext(Confirm);
}

export function ConfirmProvider({children}) {

    const [showModal, setShowModal] = useState(false);
    const [confirmmationCallback, setConfirmationCallback] = useState(null);

    const confirm = (callback) => {
        setShowModal(true);
        setConfirmationCallback(callback);
        
    }

    const handleConfirmation = (confirmed) => {
        if (confirmationCallback) {
            confirmationCallback(confirmed);
            setConfirmationCallback(null);
        }
        setShowModal(false);
    }

    return (
        <Confirm.Provider value={{confirm}}>
            {children}
            {showModal && (
                <div className="modal__wrapper">
                    <div className="modal__content">
                        <p>Are you sure you want to delete this item?</p>
                        <button onClick={() => handleConfirmation(true)}>Yes</button>
                        <button onClick={() => handleConfirmation(false)}>No</button>
                    </div>
                </div>
            )}
        </Confirm.Provider>
    )
}

export default Confirm;
