import clx from 'classnames';
import styles from './Accordion.module.scss';

type AccordionRowProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isOpen?: boolean;
  title: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const AccordionRow = ({
  children,
  className,
  id,
  isOpen,
  title,
  handleClick,
}: AccordionRowProps) => {
  return (
    <button
      onClick={handleClick}
      id={id}
      className={clx(
        styles.accordion_row,
        {
          [styles.accordion_row__open]: isOpen,
        },
        className
      )}
    >
      {children}
    </button>
  );
};
