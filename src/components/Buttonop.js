import React from 'react';

const Button = ({ value, onClick }) => (
  <button className='opt' onClick={() => onClick(value)}>{value}</button>
);

export default Button;
