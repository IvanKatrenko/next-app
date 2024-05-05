import React from "react";
import styles from "./chevron.module.scss";
import classNames from "classnames";

interface ChevronProps {
  className?: string; // Obsługa className jako props
}

export const IconChevron: React.FC<ChevronProps> = ({ className }) => {
  const chevronClassName = classNames(styles.chevron, className);

  return (
    <svg
      className={chevronClassName}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      version="1.1"
      viewBox="0 0 185.343 185.343"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M51.707 185.343a10.692 10.692 0 01-7.593-3.149 10.724 10.724 0 010-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 01-7.587 3.15z"
      ></path>
    </svg>
  );
};

export default IconChevron;
