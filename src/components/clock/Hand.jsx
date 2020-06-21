import React from 'react';
import { convertHoursForClockHand } from '../../core/date-util';

function Hand(props) {
  // props.type can be hour, minute, or second
  let rotateDegrees;
  switch (props.type) {
    case 'minute':
    case 'second':
      rotateDegrees = props.units * 6;
      break;
    case 'hour':
      rotateDegrees = convertHoursForClockHand(props.units) * 30;
      break;
    default:
      throw new Error('Must pass prop "type" as either hour, minute, or second');
  }

  const classNameAdjusted = `hand ${props.type}-hand`;
  // I added a scale here because the clock hands were a bit too long...
  let styles = {
    transform: `rotate(${rotateDegrees}deg) scale(0.95)`,
  };

  if (props.color) styles.backgroundColor = props.color;

  return (
    <div className={classNameAdjusted} style={styles}></div>
  );
}

export default Hand;