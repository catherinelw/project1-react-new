import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const NavbarItem = ({to, children}) => (
    <li className={styles.list}>
    <Link className={styles.a} to={to}>
        {children}
    </Link>
    </li>
)



export default NavbarItem