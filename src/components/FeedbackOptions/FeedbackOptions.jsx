import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ul>
        {options.map(option => (
          <li>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>
        ))}
      </ul>
    );
  }
}
