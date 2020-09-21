import React from 'react'
import profile from '../assets/pro.png'
import styles from './profileImg.module.css'

const profileImg = () => {  
    return (
            <div className={styles.profileImg} >
                <img src={profile} alt="profile" />
            </div>
        )
    }

export default profileImg