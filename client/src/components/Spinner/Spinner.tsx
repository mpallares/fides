import React from "react";
import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.containerSpinner}>
      <div className={styles.spinner}></div>;
    </div>
  );
};
