import React from "react";
import Notification from "../Notification";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <>
          <span className={styles.stat_item}>Good: {good}</span>
          <span className={styles.stat_item}>Neutral: {neutral}</span>
          <span className={styles.stat_item}>Bad: {bad}</span>
          <span className={styles.stat_item}>Total: {total}</span>
          <span className={styles.stat_item}>
            Positive feedback: {`${positivePercentage}%`}
          </span>
        </>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
};

export default Statistics;
