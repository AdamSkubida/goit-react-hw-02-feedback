import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = feedbackType => {
    this.setState(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  totalVotes = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  totalPositiveVotes = () => {
    const { good, neutral, bad } = this.state;

    const allAnswers = good + neutral + bad;
    return allAnswers ? `${((good / allAnswers) * 100).toFixed(0)}%` : `0%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(Object.keys(this.state));

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeState}
          />
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalVotes()}
            positivePercentage={this.totalPositiveVotes()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
