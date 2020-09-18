import React from 'react'

import './styles/Button.scss';

const Button = ({ text, type, onClick }) => {
  if (type === 'primary') return <button onClick={onClick} className="btn btn-primary">{text}</button>
  else if (type === 'secondary') return <button onClick={onClick} className="btn btn-secondary">{text}</button>
  else if (type === 'secondary-full') return <button onClick={onClick} className="btn btn-secondary-full">{text}</button>
}

export default Button
