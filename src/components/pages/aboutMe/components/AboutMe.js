import React from "react";
import styles from "./aboutMe.module.css";
import book from "../assets/book.svg"
import web from "../assets/web.svg"
import business from "../assets/business.svg"
import writing from "../assets/writing.svg"
import SkillsIcons from "./SkillsIcons"


const aboutMe = () => {
  return (
    <div>
      <div className={styles.container}>
       <div className={styles.title}>About Me</div>
        <p className={styles.body}>
          Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
          elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
          justo, faucibus ut mi in, condimentum finibus dolor.
        </p>
       <div className={styles.enjoyment}>
         <div className={styles.enjoymentTitle}>What I Do</div>
          <div className={styles.enjoymentContainer}>
           <div className={styles.enjoymentList}>
             <h2>Ecommerce</h2>
             <div className={styles.enjoymentIcon}>
              <img src={business} alt="business" />
             </div>
             <p className={styles.body}>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh.
              </p>
             </div>
           <div className={styles.enjoymentList}>
             <h2>Web Design</h2>
             <div className={styles.enjoymentIcon}>
              <img src={web}alt="web" />
            </div>
            <p className={styles.body}>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nib.
            </p>
            </div>
           <div className={styles.enjoymentList}>
             <h2>Writing</h2>
             <div className={styles.enjoymentIcon}>
              <img src={writing} alt="writing" />
             </div>
             <p className={styles.body}>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh.
             </p>
             </div>
           <div className={styles.enjoymentList}>
            <h2>Reading</h2>
             <div className={styles.enjoymentIcon}>
              <img src={book} alt="reading" />
              </div>
              <p className={styles.body}>
                Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                nibh.
              </p>
              </div>
             </div>
           </div>
         <div class={styles.skills}>
          <div class={styles.skillsTitle}> Skills</div>
           <div className={styles.skillsIcons}>
           <SkillsIcons />
           </div>
          </div>
         </div>
    </div>
  );
};

export default aboutMe;
