import React from 'react'
import styles from './contactDetails.module.css'
import ContactBox from './ContactBox'
// import Icon from './Icon'
import marker from '../assets/marker.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import tick from '../assets/tick.svg'

const contactDetails = () => {
    return (
        <div className={styles.container}>
        <ContactBox >
        <div>
        <img src={marker} className={styles.icon} alt="marker"/>
        </div>
        Melbourne
        </ContactBox>
        <ContactBox>
        <div>
        <img src={phone} className={styles.icon} alt="phone"/>
        </div>
        0420640582
        </ContactBox>

        <ContactBox>
        <div>
        <img src={email} className={styles.icon} alt="email"/>
        </div>
        lujiawen20@gmail.com
        </ContactBox>
        <ContactBox>
        <div>
        <img src={tick} className={styles.icon} alt="tick"/>
        </div>
        Freelance <br />Available
        </ContactBox>
        </div>
    )
}

export default contactDetails