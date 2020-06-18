import React from 'react';
import Hand from './Hand';
import { displayTimeFormatted } from '../../core/date-util';
import '../../css/Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    window.addEventListener('focus', () => this.tick());
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('focus', () => this.tick());
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let clockStyle = {},
        clockTextStyle = {};
    if (this.props.backgroundColor) clockStyle.backgroundColor = this.props.backgroundColor;
    if (this.props.textColor) clockTextStyle.color = this.props.textColor;
    if (this.props.textSize) clockTextStyle.fontSize = this.props.textSize;

    let shouldDisplayClockText = this.props.displayText || false;
    let clockTextElem;
    if (shouldDisplayClockText) {
      clockTextElem = (
        <div className="clock-text" style={clockTextStyle}>
          {displayTimeFormatted(this.state.date)}
        </div>
      );
    }

    return (
      <div className="clock-outer">
        <div className="clock" style={clockStyle}>
          <div className="clock-inner">
            <Hand type="hour" units={this.state.date.getHours()} />
            <Hand type="minute" units={this.state.date.getMinutes()} />
            <Hand type="second" units={this.state.date.getSeconds()} />
            <div className="clock-center-hand-cover"></div>
            {/*<div className="clock-loading-indicator">Loading...</div>*/}
          </div>
        </div>
        {clockTextElem}
      </div>
    );
  }
}

export default Clock;