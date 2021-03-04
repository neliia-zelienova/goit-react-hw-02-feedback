import "./App.css";
import React from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Container from "./components/Container";

class App extends React.Component {
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
    const option = e.currentTarget.name;
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
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
      </Container>
    );
  }
}

export default App;
