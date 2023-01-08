import React from 'react';

const Button = ({ name, handleClick }) => (<button className="btn btn-danger float-right text-white" onClick={handleClick}>{name}</button>);

export default Button;