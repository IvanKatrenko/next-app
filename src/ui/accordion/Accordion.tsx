import clx from 'classnames';
import styles from './Accordion.module.scss';
import { AccordionRow } from './AccordionRow';
import React, { useState } from 'react';

type AccordionProps = {
  className?: string;
  children: React.ReactNode;
};


export const Accordion = ({ className, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }

  return (
     <div className={clx(styles.accordion, className)}>{children}
     <div className={styles['accordion__header']} onClick={toggleAccordion}>
       <h1 className={styles['accordion__title']}>Accordion Title</h1>
       <div className={styles['accordion__icon']}>{isOpen ? '-' : '+'}</div>
     </div>
     <div className={styles['accordion__content']}>{isOpen ? 'Accordion Content' : null}</div>
     </div>
     
  )
};


