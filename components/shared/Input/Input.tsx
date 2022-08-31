import React, { PropsWithChildren } from 'react'

import style from './Input.module.scss'
import { useEffect } from 'react'

interface InputProps {
  name: string
  type: string
  value: string
  minLenght?: number
  required?: boolean
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<PropsWithChildren<InputProps>> = ({
  children,
  callback,
  value,
  name,
  type,
  minLenght,
  required,
}) => {
  return (
    <label className={style.input} htmlFor={name}>
      {children}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={callback}
        minLength={minLenght}
        required={required}
        placeholder={name.replace('-', ' ').toLocaleUpperCase()}
      />
    </label>
  )
}

export default Input
