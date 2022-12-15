import React from "react";

import styles from "./NavBar.module.css";
import logo from "../../images/fides-technology-logo.webp";
export const NavBar = () => {
  return (
    <div className={styles.NavBarContainer}>
      <div>
        <img className={styles.logo} src={logo} alt="" />
      </div>
    </div>
  );
};
