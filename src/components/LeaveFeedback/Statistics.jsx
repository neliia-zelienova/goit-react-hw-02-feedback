import React from "react";
import Notification from "./Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <>
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {`${positivePercentage}%`}</span>
        </>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </div>
  );
};

export default Statistics;
