import React from "react";
import styles from "./ProductsDiscount.module.css";

type Props = {};

const ProductsDiscount = (props: Props) => {
  return (
    <div className={styles.products}>
      <div className={styles.discountText}>
        <p>Discounts up to -50%</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.favoriteBtn}>
            <img
              src="./assets/icons/Favorite_duotone.svg"
              alt="Favorite_duotone"
            />
          </div>
          <div className={styles.iphone}>
            <img src="./assets/icons/Iphone-14-pro-1.png" alt="Iphone" />
          </div>
          <div className={styles.infoBuy}>
            <div className={styles.info}>
              <p>Apple iPhone 14 Pro Max 128GB Deep Purple</p>
              <p className={styles.price}>$900</p>
            </div>
            <div className={styles.buyNow}>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDiscount;
