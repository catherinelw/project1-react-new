import React from 'react'
import styles from './resume.module.css'

export const resume = () => {
    return (
        <div>
           <div className={styles.container}>
           <h1 className={styles.pageName}>Resume</h1> 
        <h2 className={styles.educationTitle}>Education</h2> 
        <div className={styles.education}>
        <div className={styles.educationTop}>
            <div className={styles.yearAndSchool}>
                2020<br/>
                <div className={styles.institute}>JR Academy</div>
            </div>

            <div className={styles.subject}>
            Full-stack Web Development
            
            <div className={styles.subjectBody}>
            
            <p>
            Maecenas finibus nec sem ut imperdiet. 
                Ut tincidunt est ac dolor aliquam sodales. 
             
             </p>
             
          
            </div>
            </div>
            </div>
        <div className={styles.educationBottom}>
            <div className={styles.yearAndSchool}>
                2015<br />
                <div className={styles.institute}>University of Auckland</div>
            </div>
            <div className={styles.subject}>

            Bachelor of Commerce
            <div className={styles.subjectBody}> 
            <p >Maecenas finibus nec sem ut imperdiet. 
                Ut tincidunt est ac dolor aliquam sodales. 
             </p>
            </div>
        </div>
        </div>
        </div>
         <div className={styles.experienceTitle}>Experience</div> 
         <div className={styles.experience}>  
         <div className={styles.experienceTop}>
            <div className={styles.yearAndDesc}>
                2020<br />
                <div className={styles.institute}>JR Academy</div>
            </div>
            <div className={styles.subject}>Frontend Web Development
            <div className={styles.subjectBody}>
            <p>Maecenas finibus nec sem ut imperdiet. 
                Ut tincidunt est ac dolor aliquam sodales. 
             </p>
             </div>
             </div>
        </div>  
        <div className={styles.experienceBottom}>
            <div className={styles.yearAndDesc}>
                2020<br />
                <div className={styles.institute}>JR Academy</div>
            </div>
            <div className={styles.subject}>
            Backend Web Development
            <div className={styles.subjectBody}>
            <p>Maecenas finibus nec sem ut imperdiet. 
                Ut tincidunt est ac dolor aliquam sodales. 
             </p>
             </div>
        </div>
        </div>  
        </div>
        </div>
        </div>
        
        
    );
};

export default resume;