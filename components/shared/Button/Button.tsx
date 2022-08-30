import React, { PropsWithChildren } from 'react'

import style from './Button.module.scss'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined
  callback?: () => void
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, type, callback }) => {

  return (
    <button className={style.button} type={type} onClick={callback && callback}>
      {children}
    </button>
  )
}

export default Button
