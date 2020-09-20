import React from 'react'
import styles from './profile.module.css'
import ProfileImg from './ProfileImg'
import ProfileIcons from './ProfileIcons'

const profile = () => {

        return (
            <div className={styles.profile}>
            <ProfileImg />
            <h2 class={styles.profileName}>Lujia Wen</h2>
            <div class={styles.profileDesc}>Web Developer</div>
            <ProfileIcons />
            </div>
        )
    
}

export default profile