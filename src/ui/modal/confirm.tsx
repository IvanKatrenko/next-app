import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const Confirm = ({ title, description, onConfirm, onCancel }) => {

    return(
        <Modal>
            <h1 className='modal__title'>{title}</h1>
            <p className='modal__description'>{description}</p>
            <div className='modal__buttons'></div>
                <button onClick={onCancel}>No</button>
                <button onClick={onConfirm}>Yes</button>
        </Modal>
    );
};

Confirm.propTypes = {
    
    title: PropTypes.string,
    description: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func

}

export default Confirm;