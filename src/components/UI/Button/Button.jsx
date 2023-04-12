import React from 'react'
import {button} from './Button.module.css'

const Button = ({type, handleClick, children}) => {
  return (
    <button 
      className={button} 
      type={type || 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button