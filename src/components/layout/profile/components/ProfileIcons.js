import React from 'react'
import styles from './profileIcons.module.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const profileIcons = () => {

        return (
            <div className={styles.iconsContainer}>
            <img src={linkedin} alt="linkedin" />
            <img src={github} alt="github" />
                
            </div>
        )
    
}

export default profileIcons