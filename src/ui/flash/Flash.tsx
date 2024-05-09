import clx from 'classnames';
import styles from './Flash.module.scss';

export type FlashVariant = 'success' | 'danger' | 'warning' | 'info';

type FlashProps = {
  className?: string;
  title?: string;
  message?: string;
  variant?: FlashVariant;
  handleClose?: () => void;
};

export const Flash = ({
  className,
  title,
  message,
  variant = 'info',
  handleClose,
}: FlashProps) => {
  return (
    <div
      className={clx(
        styles.flash,
        {
          [styles[variant]]: variant,
        },
        className
      )}
    >
      Flash Content
    </div>
  );
};
