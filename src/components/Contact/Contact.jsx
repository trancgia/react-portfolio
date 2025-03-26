import React from 'react'
import {getImageUrl} from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id = "contact" className={styles.container}>
    <div className={styles.text} >
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <a href="mailto:chrisgktran@gmail.com">
            <img className = {styles.image} src = {getImageUrl("contact/mail.png")} alt = "email icon" />
        </a>
        </li>
        
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/christopher-tran-5aa155237/">
            <img className = {styles.image} src = {getImageUrl("contact/linkedin.png")} alt = "linkedin icon" />
            </a>
        </li>
        
        <li className={styles.link}>
            <a href="mailto:chrisgktran@gmail.com">
            <img className = {styles.image} src = {getImageUrl("contact/github.png")} alt = "github icon" />
            </a>
        </li>
    </ul>
    </footer>
  );
};
