import React from 'react'
import styles from './contactBox.module.css'

const contactBox = (props) => {
    return (
        <div className={styles.contactBox}>
            {props.icon}
           {props.name} 
        </div>
    )
}

export default contactBox
