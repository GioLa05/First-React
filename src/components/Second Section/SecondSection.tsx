import React from "react";
import styles from "./SecondSection.module.css";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className={styles.mainContainerGroup}>
      <div className={styles.secondaryContainerGroup}>
        <div className={styles.containerGroup}>
          <div className={styles.container1}>
            <img
              className={styles.desktop}
              src="/assets/icons/airpods-max.png"
              alt="airpods-max"
            />
            <img
              className={styles.mobile}
              src="/assets/icons/airpods-max-mobile.png"
              alt="airpods-max"
            />
            <div className={styles.containerText}>
              <p className={styles.main}>
                Apple AirPods <br />
                <span>Max</span>
              </p>
              <p className={styles.secondary}>
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className={styles.container2}>
            <img
              className={styles.desktop}
              src="/assets/icons/apple-vision-pro.png"
              alt="apple-vision-pro"
            />
            <img
              className={styles.mobile}
              src="/assets/icons/apple-vision-pro-mobile.png"
              alt="apple-vision-pro"
            />
            <div className={styles.containerText}>
              <p className={styles.main}>
                Apple Vision <span>Pro</span>
              </p>
              <p className={styles.secondary}>
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <img
            className={styles.desktop}
            src="/assets/icons/PlayStation.png"
            alt="PlayStation"
          />
          <img
            className={styles.mobile}
            src="/assets/icons/PlayStation-mobile.png"
            alt="PlayStation"
          />
          <div className={styles.containerText}>
            <p className={styles.main}>Playstation 5</p>
            <p className={styles.secondary}>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <div>
          <img
            className={styles.mobile}
            src="/assets/icons/MacBook Pro 14-mobile.png"
            alt="MacBook-Pro-14-mobile"
          />
        </div>
        <div className={styles.containerText}>
          <p className={styles.main}>
            Macbook <span>Air</span>
          </p>
          <p className={styles.secondary}>
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <img
          className={styles.desktop}
          src="/assets/icons/MacBook-Pro-14.png"
          alt="MacBook-Pro-14"
        />
      </div>
    </div>
  );
};

export default SecondSection;
