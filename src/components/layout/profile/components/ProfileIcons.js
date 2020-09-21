import React from 'react'
import styles from './profileIcons.module.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const profileIcons = () => {

        return (
            <div className={styles.iconsContainer}>
            <a href="http://www.linkedin.com/in/lujiawen">
            <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/catherinelw">
            <img src={github} alt="github" />
            </a>
            </div>
        )
    }

export default profileIcons