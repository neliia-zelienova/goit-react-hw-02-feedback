import React from "react";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div>
      <h1 className={styles.section_title}>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
