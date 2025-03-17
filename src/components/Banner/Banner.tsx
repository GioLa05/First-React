import React from "react";
import styles from "./Banner.module.css";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <p className={styles.h1}>
          Big Summer <span>Sale</span>
        </p>
        <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
      </div>
      <button className={styles.shopNow}>Shop Now</button>
    </div>
  );
};

export default Banner;
