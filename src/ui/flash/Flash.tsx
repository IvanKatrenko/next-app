import clx from 'classnames';
import styles from './Flash.module.scss';
import React from 'react';

export type FlashVariant = 'success' | 'danger' | 'warning' | 'info';

type FlashProps = {
  className?: string;
  title?: string;
  message?: string;
  variant?: FlashVariant;
  handleClose?: () => void; // Added support for closing flash
};

export const Flash = ({
  className,
  title,
  message,
  variant = 'info',
  handleClose,
}: FlashProps) => {

  const handleFlashClick = () => {
    if (handleClose) {
      handleClose(); //function call handleClose if it exists
    }
  }

  return (
    <div
      className={clx(
        styles.flash,
        {
          [styles[variant]]: variant,
        },
        className
      )}
      onClick={handleFlashClick} // Add onClick event handler
    >
      {title && <h1>{title}</h1>}
      {message && <p>{message}</p>}
      {handleClose && <button onClick={handleClose}>Close</button>}
      Flash Content
    </div>
  );
};
