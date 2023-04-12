import React from 'react'
import {button} from './Button.module.css'

const Button = ({btnType, handleClick, children}) => {
  return (
    <button 
      className={button} 
      type={btnType || 'button'}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button