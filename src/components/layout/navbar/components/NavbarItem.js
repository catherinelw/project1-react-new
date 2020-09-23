import React from 'react'
import styles from './Navbar.module.css'
// import { Link } from 'react-router-dom'

const NavbarItem = ({to, children, onClick}) => (
    <li className={styles.list}>
    <div className={styles.a} 
          onClick={onClick}>
        {children}
    </div>
    </li>
)
export default NavbarItem