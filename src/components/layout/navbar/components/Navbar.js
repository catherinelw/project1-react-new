import React from 'react'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'

const Navbar = ({activePage, onNavItemClick}) => {
    return (
            <header className={styles.header}>
            <div className="nav_links">
            <NavbarItem active={activePage=== "HOME"} onClick={onNavItemClick("HOME")} >HOME</NavbarItem>
            <NavbarItem active={activePage=== "ABOUTME"} onClick={onNavItemClick("ABOUTME")}>ABOUT ME</NavbarItem>
            <NavbarItem active={activePage=== "RESUME"} onClick={onNavItemClick("RESUME")}>RESUME</NavbarItem>
            <NavbarItem active={activePage=== "PORTFOLIO"} onClick={onNavItemClick("PORTFOLIO")}>PORTFOLIO</NavbarItem>
            <NavbarItem active={activePage=== "CONTACT"} onClick={onNavItemClick("CONTACT")}>CONTACT</NavbarItem>
            </div>
            </header>
        )
  }

export default Navbar