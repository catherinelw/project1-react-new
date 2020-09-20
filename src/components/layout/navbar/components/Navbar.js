import React from 'react'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'

const Navbar = () => {

        return (
            <header className={styles.header}>
            <div className="nav_links">
               <NavbarItem toPage="HOME">HOME</NavbarItem>
               <NavbarItem toPage="ABOUTME">ABOUT ME</NavbarItem>
               <NavbarItem toPage="RESUME">RESUME</NavbarItem>
               <NavbarItem toPage="PORTFOLIO">PORTFOLIO</NavbarItem>
               <NavbarItem toPage="CONTACT">CONTACT</NavbarItem>
            </div>
            </header>
        )
    
}

export default Navbar