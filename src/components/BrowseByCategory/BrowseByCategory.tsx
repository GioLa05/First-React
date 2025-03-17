import React from "react";
import styles from "./BrowseByCategory.module.css";

type Props = {};

const BrowseByCategory = (props: Props) => {
  return (
    <div className={styles.browseByCategory}>
      <div className={styles.categoryTop}>
        <p>Browse By Category</p>
        <div className={styles.arrows}>
          <img src="/assets/icons/arrow-left.svg" alt="arrow-left" />
          <img src="/assets/icons/arrow-right.svg" alt="arrow-right" />
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/assets/icons/browse-by-category/Phones.svg" alt="Phones" />
          <p>Phones</p>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
