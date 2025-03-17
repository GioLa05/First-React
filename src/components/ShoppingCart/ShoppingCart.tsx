import React from "react";
import styles from "./ShoppingCart.module.css";

type Props = {};

const ShoppingCart = (props: Props) => {
  return (
    <div className={styles.shoppingCarts}>
      <p>Shopping Cart</p>
      <div className={styles.cartProduct}>
        <img src="./assets/icons/iphone-small.png" alt="iphone" />
        <div className={styles.info}>
          <div className={styles.infoLeft}>
            <div className={styles.text}>
              <p className={styles.h1}>
                Apple iPhone 14 Pro Max 128Gb Deep Purple
              </p>
              <p>#25139526913984</p>
            </div>
          </div>
          <div className={styles.infoRight}>
            <div className={styles.counter}>
              <img
                className={styles.minus}
                src="./assets/icons/No Edit.svg"
                alt="no-edit"
              />
              <button>1</button>
              <img
                className={styles.plus}
                src="./assets/icons/Edit.svg"
                alt="edit"
              />
            </div>
            <p className={styles.price}>$1399</p>
            <img
              className={styles.close}
              src="./assets/icons/Close.svg"
              alt="close"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
