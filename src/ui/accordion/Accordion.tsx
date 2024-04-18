import clx from 'classnames';
import styles from './Accordion.module.scss';

type AccordionProps = {
  className?: string;
  children: React.ReactNode;
};

export const Accordion = ({ className, children }: AccordionProps) => {
  return <div className={clx(styles.accordion, className)}>{children}</div>;
};
