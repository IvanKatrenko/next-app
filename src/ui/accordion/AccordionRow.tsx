import clx from "classnames";
import styles from "./Accordion.module.scss";
import React from "react";

type AccordionRowProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isOpen?: boolean;
  title: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const AccordionRow = ({
  children, //text
  className,
  id,
  isOpen,
  title,
  handleClick,
}: AccordionRowProps) => {
  return (
    <div
      className={clx(
        styles.accordion_row,
        {
          [styles.accordion_row__open]: isOpen,
        },
        className // change the background color of the row when it is open
      )}
    >
      <button
        className={styles.accordion_row__title}
        onClick={handleClick}
        id={id}
      >
        {title}
      </button>
      <div className={styles.accordion_row__content}>{children}</div>
    </div>
  );
};
