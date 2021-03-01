import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <button
            className={styles.option_button}
            type="button"
            name={option}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </>
  );
};
export default FeedbackOptions;
