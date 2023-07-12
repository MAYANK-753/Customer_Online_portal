import React from 'react';

import './Button.css';

const Input = props => {
  const element =
    props.element === 'button' ? (
      <button type={props.type} onClick={props.onClick}>{props.name}</button>
    ) : (
      <button>submit</button>
    );

  return (
    <div className={`button-control`}>
      {element}
    </div>
  );
};

export default Input;
