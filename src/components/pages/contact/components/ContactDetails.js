import React from 'react'
import styles from './contactDetails.module.css'
import ContactBox from './ContactBox'

const contactDetails = () => {
    return (
        <div className={styles.container}>
        <ContactBox name="Melbourne" />
        <ContactBox name="0420640582"/>
        <ContactBox name="lujiawen20@gmail.com"/>
        <ContactBox name="Freelance Available"/>
        </div>
    )
}

export default contactDetails