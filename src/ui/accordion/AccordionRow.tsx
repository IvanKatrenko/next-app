import clx from 'classnames';
import styles from './Accordion.module.scss';
import React from 'react';

type AccordionRowProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isOpen?: boolean;
  title: string;
  handleClick?: (id: string) => void; //FUNCTION CALLBACK CLICK ON THE ROW 
};

export const AccordionRow = ({
  children,
  className,
  id,
  isOpen,
  title,
  handleClick,
}: AccordionRowProps) => {

  const handleRClick = () => {
    if (handleClick) {
      handleClick(id || ''); // Calling the click function from the accordion id
    }
  };
}
  const handleContentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); //ignore the event when the row is clicked
  };
  

  return (
    <button
      onClick={handleRowClick}
      id={id}
      className={clx(
        styles.accordion_row,
        {
          [styles.accordion_row__open]: isOpen,
        },
        className // change the background color of the row when it is open
      )}
    >
      <div className={styles.accordion_row__content} onClick={handleContentClick}>
      {children}
      </div>
    </button>
  );
};
