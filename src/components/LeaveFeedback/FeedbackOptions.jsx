import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => {
          return (
            <button type="button" key={option} onClick={onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          );
      })}
    </>
  );
};
export default FeedbackOptions;
