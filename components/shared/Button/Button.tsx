import { props } from 'cypress/types/bluebird'
import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  callback?: () => void
  disabled?: boolean  
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, type, callback, disabled }) => {

  return (
    <button className={style.button} type={type} onClick={callback && callback} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
