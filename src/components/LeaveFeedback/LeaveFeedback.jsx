import React from "react";
import Statistics from "./Statistics";

class LeaveFeedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback())
      return Math.round((this.state.good / this.countTotalFeedback()) * 100.0);
    else return 0;
  };

  handleClick = (e) => {
    switch (e.target.innerHTML) {
      case "Good":
        this.setState((prevState) => ({
          good: prevState.good + 1,
        }));
        break;
      case "Bad":
        this.setState((prevState) => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
      case "Neutral":
        this.setState((prevState) => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleClick}>
          Good
        </button>
        <button type="button" onClick={this.handleClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClick}>
          Bad
        </button>
        <div>
          <h2>Statistics</h2>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
          <span>Total: {this.countTotalFeedback()}</span>
          <span>
            Positive feedback: {`${this.countPositiveFeedbackPercentage()}%`}
          </span>
        </div>
      </div>
    );
  }
}

export default LeaveFeedback;
