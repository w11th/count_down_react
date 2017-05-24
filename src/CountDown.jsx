import React from 'react';
import PropTypes from 'prop-types';

class CountDown extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      count: this.props.startCount
    };
  }

  render() {
    return this.props.children(this.state.count);
  }

  componentDidMount() {
    this.intervalHandler = setInterval(() => {
      const newCount = this.state.count - 1;
      if (newCount >= 0) {
        this.setState({count: newCount});
      } else {
        window.clearInterval(this.intervalHandler);
      }
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalHandler);
  }
}

CountDown.propTypes = {
  startCount: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired
};

export default CountDown;
