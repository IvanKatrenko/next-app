import clx from "classnames";
import styles from "./Accordion.module.scss";
import { IconChevron } from "../icons";

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
    <div
      className={clx(
        styles.accordion_row,
        {
          [styles.accordion_row__open]: isOpen,
        },
        className
      )}
    >
      <button onClick={handleClick} id={id}>
        {title}
        <IconChevron className={styles.accordion_row__icon} />
        <IconChevron className={styles.accordion__arrow} />
      </button>

      <div className={styles.accordion_row__content}>{children}</div>
    </div>
  );
};
