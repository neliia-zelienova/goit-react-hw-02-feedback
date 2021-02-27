import React from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

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
    switch (e.target.innerHTML.toLowerCase()) {
      case "good":
        this.setState((prevState) => ({
          good: prevState.good + 1,
        }));
        break;
      case "bad":
        this.setState((prevState) => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
      case "neutral":
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
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "bad", "neutral"]}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default LeaveFeedback;
