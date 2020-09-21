import React from 'react'
import styles from './form.module.css'
const form = () => {
    return (
  <div className={styles.form}>
    How Can I Help You?
  <form name="form">
  <label for="fname"></label><br />
  <textarea type="text" id="fname" name="fname"
   placeholder="Full Name" className={styles.fullName}/><br />
  <label for="phone"></label><br />
  <textarea type="text" id="phone" name="phone" 
  placeholder="Contact Number" className={styles.phone}/><br />
  <label for="email"></label><br />
  <textarea type="text" id="email" name="email"
   placeholder="Email" className={styles.email}/><br /><br />
  <label for="subject"></label>
  <textarea id="message" name="Message" 
  placeholder="Message" className={styles.message}></textarea>
  <input type="submit" value="Submit" className={styles.submit}/>
  </form>
  </div>  
        
    )
}

export default form;