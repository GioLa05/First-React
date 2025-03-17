import React from 'react'
import styles from "./Hero.module.css";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className={styles.firstSectionBackground}>
      <div className={styles.firstSection}>
        <div className={styles.lContent}>
          <p className={styles.firstP}>Pro.Beyond.</p>
          <p className={styles.secondP}>
            IPhone 14 <span>Pro</span>
          </p>
          <p className={styles.thirdP}>
            Created to change everything for the better. For everyone
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.rContent}>
          <img
            className={styles.desktop}
            src="./assets/icons/Iphone Image.png"
            alt="Iphone"
          />
          <img
            className={styles.mobile}
            src="./assets/icons/Iphone Image-mobile.png"
            alt="Iphone"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero