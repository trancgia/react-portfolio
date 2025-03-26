import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id = "about">
        <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/laptop.png")} 
                alt = "laptop" className={styles.laptop}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/cursor.png")} 
                        alt = "cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Frontend developer</h3>
                            <p>
                                I am a frontend developer who utilizes HTML, CSS, and React to build consistent and optimized websites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/server.png")} 
                        alt = "server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>
                                I am a backend developer who utilizes SQL, Python, Java, or JavaScript along with APIs for efficiency and responsiveness
                            </p> 
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src = {getImageUrl("about/notepad.png")} 
                        alt = "notepad icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>
                                I am a UI/UX designer who utilizes Figma and Procreate to create wireframes and prototyping designs and systems
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
    </section>
  )
}
