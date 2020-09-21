import React from 'react'
import styles from './contact.module.css'
import Form from './Form'
import ContactDetails from './ContactDetails'
import Location from './Location'


const contact = () => {
    return (
        <>
        <div className={styles.container}>
        <ContactDetails />
        <Form /> 
        </div>
        <Location /> 
        </>
        
    )
}

export default contact;