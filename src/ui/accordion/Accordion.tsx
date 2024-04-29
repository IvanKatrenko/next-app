import clx from "classnames";
import styles from "./Accordion.module.scss";
import React, { useState } from "react";
import Icon from "./chevron.svg";

type AccordionProps = {
  className?: string;
  children: React.ReactNode;
};

const [isOpen, setIsOpen] = React.useState(false);

const toggleAccordion = () => {
  setIsOpen(!isOpen);
};

export const Accordion = ({ className, children }: AccordionProps) => {
  return (
    <div className={clx(styles.accordion, className)}>
      <h3 className={styles.title} onClick={toggleAccordion}>
        Accordion Title
      </h3>
      <div
        className={styles.content}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
      <span
        className={clx(
          styles.arrow,
          isOpen && styles.open,
          "accordion_row_arrow"
        )}
        onClick={toggleAccordion}
      >
        <Icon className="accordion_row_arrow" height="1em" width="1em" />
      </span>
    </div>
  );
};
