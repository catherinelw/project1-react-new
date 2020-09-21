import React from 'react'
import styles from './card.module.css'

const card = ({image,alt}) => {
    return (
        <div className={styles.card}>
        <img src={image} alt={alt} className={styles.image} />
        </div>
    )
}

export default card