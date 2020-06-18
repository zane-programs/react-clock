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
  const styles = {
    transform: `rotate(${rotateDegrees}deg)`,
  }
  return (
    <div className={classNameAdjusted} style={styles}></div>
  );
}

export default Hand;