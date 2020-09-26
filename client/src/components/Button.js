import React from 'react'

import './styles/Button.scss';

const Button = ({ text = 'text', type = 'secondary-full', submit = '', onClick }) => {
  if (type === 'primary') return <button onClick={onClick} className="btn btn-primary">{text}</button>

  else if (type === 'secondary') return <button onClick={onClick} className="btn btn-secondary">{text}</button>
  else if (type === 'secondary-muted') return <button onClick={onClick} type={submit} className="btn btn-secondary-muted">{text}</button>
  
  else if (type === 'secondary-full') return <button onClick={onClick} type={submit} className="btn btn-secondary-full">{text}</button>
  else if (type === 'secondary-full-muted') return <button onClick={onClick} type={submit} className="btn btn-secondary-full-muted">{text}</button>
}

export default Button
