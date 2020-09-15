import React from 'react'

import './styles/Button.scss';

const Button = ({ text, type }) => {
  if (type === 'primary') return <button className="btn btn-primary">{text}</button>
  else if (type === 'secondary') return <button className="btn btn-secondary">{text}</button>
  else if (type === 'secondary-full') return <button className="btn btn-secondary-full">{text}</button>
}

export default Button
