import React from 'react';

const Button = ({ name, handleClick }) => (
  <button onClick={handleClick}>{name}</button>
);

export default Button;
