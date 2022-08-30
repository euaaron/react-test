import React from 'react'
import ActiveLink from './ActiveLink/ActiveLink'
import styles from './Navbar.module.scss'

interface Route {
  href: string
  label: string
  key?: string
}

const Navbar: React.FC = () => {
  let routes: Route[] = [
    { href: '/login', label: 'Log In' },
    { href: '/signin', label: 'Sign In' },
  ]

  routes = routes.map(route => {
    return {
      ...route,
      key: `route-${route.href.replace('/', '')}`,
    }
  })

  return (
    <nav className={styles.navbar}>
      <div>
        <ActiveLink href="/">Home</ActiveLink>
        <ul>
          {routes.map(({ label, href, key }) => (
            <li key={key}>
              <ActiveLink href={href}>{label}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
