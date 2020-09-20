import React from 'react'
import styles from './Navbar.module.css'
import NavbarItem from './NavbarItem'

const Navbar = () => {

        return (
            <header className={styles.header}>
            <div className="nav_links">
               {/* <Link> */}
               <NavbarItem to="/">HOME</NavbarItem>
               {/* </Link> */}
               {/* <Link> */}
               <NavbarItem to="/about">ABOUT ME</NavbarItem>
                {/* </Link>  */}
                 {/* <Link>  */}
               <NavbarItem to="/resume">RESUME</NavbarItem>
               {/* </Link> */}
                {/* <Link> */}
               <NavbarItem to="/portfolio">PORTFOLIO</NavbarItem>
               {/* </Link> */}
               {/* <Link> */}
               <NavbarItem to="/contact">CONTACT</NavbarItem>
               {/* </Link> */}
            </div>
            </header>
        )
    
}

export default Navbar