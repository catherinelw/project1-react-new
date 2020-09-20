import React from 'react'
import styles from './form.module.css'
const form = () => {
    return (
    <div className={styles.form}>
    How Can I Help You?
    <form name="form">
  <label for="fname"></label><br />
  <input type="text" id="fname" name="fname" value="Full Name" style={{width:"80%"}}/><br />
  <label for="lname"></label><br />
  <input type="text" id="lname" name="lname" value="Email" style={{width:"80%"}}/><br /><br />
  <label for="subject"></label>
    <textarea id="subject" name="Message" 
    placeholder="Message" style={{height:"150px", width:"80%"}}></textarea>
  <input type="submit" value="Submit" />
  </form>
</div>  
        
    )
}

export default form;