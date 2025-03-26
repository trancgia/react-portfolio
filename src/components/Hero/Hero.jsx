import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <TypeAnimation className={styles.title}
          sequence={[
            "Hi, I'm Christopher Tran",
            1000,
            "Hi, I'm",
            1000,
            "Hi, I'm a Front-end Developer",
            1000,
            "Hi, I'm",
            1000,
            "Hi, I'm a UI/UX Designer",
            2000,
          ]}
          wrapper = "h1"
          speed = {1}
          repeat={Infinity}
          />
        <p className={styles.description}>
            I am a 3rd year Computer Science Major interested in Web Development and UI/UX. Contact me here!
        </p>
        <a href = "mailto:chrisgktran@gmail.com" className={styles.contactBtn}>Contact Me </a>
        </div>
        <img src={getImageUrl("hero/headshot.png")} alt = "look at my pretty self" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
  </section>
  );
}
