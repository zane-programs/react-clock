import React from 'react';
import shortid from 'shortid';

function Dropdown(props) {
  let optionElems = props.options.map(optionInfo => {
    // I may not need to be using shortid...
    return (
      <option
        value={optionInfo.value}
        key={props.value + '-' + shortid.generate()}
      >
        {optionInfo.name}
      </option>
    );
  });

  return (
    <select
      className={props.className}
      onChange={handleChange(props.onChange)}
      value={props.value}
    >
      {optionElems}
    </select>
  );
}

function handleChange(cb) {
  return function(event) {
    cb(event.target.value);
  }
}

export default Dropdown;