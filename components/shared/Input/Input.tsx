import React, { PropsWithChildren } from 'react'

import style from './Input.module.scss'

interface InputProps {
  name: string
  type: string
}

const Input: React.FC<PropsWithChildren<InputProps>> = ({ children, name, type }) => {
  return (
    <label className={style.input} htmlFor={name} >
      {children}
      <input id={name} name={name} type={type} placeholder={name.replace('-',' ').toLocaleUpperCase()} />
    </label>
  )
}

export default Input
