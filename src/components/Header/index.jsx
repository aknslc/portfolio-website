import React from 'react'
import styles from './header.module.css'
import { navLinks } from '../../constants'
const Header = () => {
  return (
    <header id={styles.header}>

      <div className="custom-container">
        <nav>
          <div id={styles.logo}>
            #aknslc
          </div>
          <ul className={styles.menu}>
            {navLinks.map(item => (
              <li className={styles.menuItem}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header