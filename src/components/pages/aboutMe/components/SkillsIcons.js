import React from 'react'
import styles from './skillsIcons.module.css'
import javascript from '../assets/js.jpg'
import react from '../assets/react.svg'
import git from '../assets/git.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import java from '../assets/java.jpeg'
import php from '../assets/php.png'
import postman from '../assets/postman.png'

const skillsIcons = () => {
    return (
        <div className={styles.skillsIcons}>
           <img src={javascript} className={styles.js} alt="javascript"/>
           <img src={react} className={styles.react} alt="react"/>
           <img src={git} className={styles.git} alt="git"/>
            <img src={mongo} className={styles.mongo} alt="mongo" />
            <img src={node} className={styles.node} alt="node" />
           <img src={java} className={styles.java} alt="java"/>
           <img src={php} className={styles.php} alt="php"/>
           <img src={postman} className={styles.postman} alt="postman"/>
        </div>
    )
}

export default skillsIcons