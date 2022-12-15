import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => (onClick ? onClick() : null)}
      className={styles.button}
    >
      {title}
    </button>
  );
};
