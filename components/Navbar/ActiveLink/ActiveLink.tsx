import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import styles from './ActiveLink.module.scss'

interface ActiveLinkProps {
  href: string
}

/**
 * @description A React Component link that is active if the current path is the same as the href
 * @param href - the href of the link 
 * @returns React.FC
 */
const ActiveLink: React.FC<PropsWithChildren<ActiveLinkProps>> = ({ children, href }) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(router.pathname === href)
  }, [href, router])

  function handleClick(e: any) {
    e.preventDefault()    
    router.push(href)
    setIsActive(true)
  }

  return (
    <a className={styles.link + ' ' + (isActive ? styles.activeLink : '')} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}

export default ActiveLink
