import React, { useEffect, useState } from 'react';
import './Flash.module.scss';

const Flash: React.FC < {message: string; duration: number}> = ({message, duration = 2500}) => { //message and duration props
    const [isOpen, setIsOpen] = useState(false); //isOpen state

//automatically hide the message after a specified period of time
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, duration);

// clear the timer when the component unmounts
        return () => {
            clearTimeout(timer);
        }
    }, [isOpen, duration]);

//show the message
    return (
        <div className={`flash ${isOpen  //if isOpen is true, add the flash--open class to the flash element
        ? 'flash--open'
         : ''}`}>
            {message}
        </div>
    )

}

export default Flash;