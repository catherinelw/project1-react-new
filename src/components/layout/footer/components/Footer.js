import React from 'react'
import styles from './footer.module.css'

const d = new Date();
const year = d.getFullYear();

export const footer = () => {
    return (
        <footer className={styles.footer}>
       	&copy; {year} All rights reserved
      </footer>
    )
}

export default footer