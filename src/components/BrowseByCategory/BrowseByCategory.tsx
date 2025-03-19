"use client";

import React, { useEffect, useState } from "react";
import styles from "./BrowseByCategory.module.css";

type Props = {};

const BrowseByCategory = (props: Props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/browseByCategory.json")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  console.log(categories);

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
        {categories.map  ((categories: any)  => (
          <div key={categories.id} className={styles.card}>
            <img
              className={styles.image}
              src={categories.image}
              alt={categories.name}
            />
            <p className={styles.name}>{categories.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
