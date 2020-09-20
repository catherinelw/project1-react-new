import React from 'react'
import styles from './profileIcons.module.css'
import linkedin from '../assets/linkedin.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

const profileIcons = () => {

        return (
            <div className={styles.iconsContainer}>
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
                
            </div>
        )
    
}

export default profileIcons