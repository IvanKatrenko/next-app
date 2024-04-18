import { createPortal } from 'react-dom';
import clx from 'classnames';
import styles from './Modal.module.scss';
import { ClientPortal } from '../portal';

type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  title?: string;
  portalSelector?: string;
  handleClose?: () => void;
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
      <div className={clx(styles.modal, className)}>Modal Content</div>
    </ClientPortal>
  );
};
