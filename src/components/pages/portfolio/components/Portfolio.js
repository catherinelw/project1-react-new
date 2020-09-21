import React from 'react'
import styles from './portfolio.module.css'
import Card from './Card'
import ocean from '../assets/ocean.PNG'
import lake from '../assets/lake.jpg'
import desert from '../assets/desert.PNG'


export const portfolio = () => {
    return (
        <div className={styles.container}>
        <h2 className={styles.title}>
        Portfolio
        </h2>
        <h3>Project 1</h3>
        <Card image={ocean} alt="ocean"/>
        <h3>Project 2</h3>
        <Card image={lake} alt="lake"/>
        <h3>Project 3</h3>
        <Card image={desert} alt="desert"/>  
        </div>
    )
}

export default portfolio;