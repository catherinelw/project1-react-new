import React from 'react'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    return (
            <header className={styles.header}>
            <div className="nav_links">
            <NavbarItem to="/">HOME</NavbarItem>
            <NavbarItem to="/about">ABOUT ME</NavbarItem>
            <NavbarItem to="/resume">RESUME</NavbarItem>
            <NavbarItem to="/portfolio">PORTFOLIO</NavbarItem>
            <NavbarItem to="/contact">CONTACT</NavbarItem>
            </div>
            </header>
        )
  }

export default Navbar