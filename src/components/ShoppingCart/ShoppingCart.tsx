"use client";

import styles from "./ShoppingCart.module.css";
import React, { useState, useEffect } from "react";

type Props = {};

const ShoppingCart = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts([]);
    }
  }, []);

  console.log(products);

  return (
    <div className={styles.shoppingCarts}>
      <p>Shopping Cart</p>
      {products.length > 0 ? (
        products.map((product: any) => (
          <div key={product.id} className={styles.cartProduct}>
            <img className={styles.image} src={product.image} alt="iphone" />
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div className={styles.text}>
                  <p className={styles.h1}>{product.name}</p>
                  <p>{product.id}</p>
                </div>
              </div>
              <div className={styles.infoRight}>
                <div className={styles.counter}>
                  <button className={styles.counterButton}>
                    <img
                      className={styles.minus}
                      src="/assets/icons/No Edit.svg"
                      alt="no-edit"
                    />
                  </button>
                  <button className={styles.counterNumber}>1</button>
                  <button className={styles.counterButton}>
                    <img
                      className={styles.plus}
                      src="/assets/icons/Edit.svg"
                      alt="edit"
                    />
                  </button>
                </div>
                <p className={styles.price}>${product.price}</p>
                <img
                  className={styles.close}
                  src="/assets/icons/Close.svg"
                  alt="close"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available to display.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
