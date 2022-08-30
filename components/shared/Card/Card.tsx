import React, { PropsWithChildren } from 'react'

import style from './Card.module.scss'

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={style.card}>{children}</section>
}

export default Card
