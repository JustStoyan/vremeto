import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type?: string;
  children: any;
  onClick?: any;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
