import { createPortal } from 'react-dom';
import clx from 'classnames';
import styles from './Modal.module.scss';
import { ClientPortal } from '../portal';
import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  title?: string;
  portalSelector?: string;
  handleClose?: () => void;
};

const ModalWrapper = ({ children, handleClose }: { children: React.ReactNode; handleClose?: () => void }) => {
  return createPortal(
    <div className={styles['modal__shadow']} onClick={handleClose}></div>,
    document.body
  );
};

export const Modal = ({
  children,
  className,
  isOpen = true,
  title = '',
  portalSelector = 'modal-root',
  handleClose,
}: ModalProps) => {
  return (
    <ClientPortal show={isOpen} selector={portalSelector}>

      <ModalWrapper handleClose={handleClose}>
        <div className={clx(styles['modal__wrapper'])}>
          <div className={styles['modal__box']}>
            <div className={clx(styles['modal__content'], className)}>
              {title && <h1 className={styles['modal__title']}>{title}</h1>}
              {children}
              {handleClose && <button 
                className={styles['modal__close']}
                onClick={handleClose}>X</button>}
            </div>
          </div>
        </div>
      </ModalWrapper>

    </ClientPortal>
  );
};
