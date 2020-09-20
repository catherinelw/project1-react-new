import React from "react";
import styles from "./aboutMe.module.css";


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
                <img src="image/business.svg" alt="business" />
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
                <img src="image/web.svg" alt="web" />
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
                <img src="image/writing.svg" alt="writing" />
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
                <img src="image/book.svg" alt="reading" />
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
           <div className={styles.skillsIcon}>
           <img src="image/js.jpg" alt="javascript"/>
           <img src="image/react.svg" alt="react"/>
           <img src="image/git.png" alt="git"/>
            <img src="image/mongo.png" alt="mongo" />
            <img src="image/node.png" alt="node" />
           <img src="image/java.jpeg" alt="java"/>
           <img src="image/php.png" alt="php"/>
           <img src="image/postman.png" alt="postman"/>
        </div>
       </div>
      </div>
    </div>
  );
};

export default aboutMe;
