import React from 'react'
import styles from './Navbar.module.css'

const NavbarItem = ({toPage, children}) => (
    <li className={styles.list}>
    <a className={styles.a} href={toPage}>
        {children}
    </a>
    </li>
)



export default NavbarItem