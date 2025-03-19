"use client";

import styles from "./ShoppingCart.module.css";
import React, { useState, useEffect } from "react";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const updateCart = (updatedCart: Product[]) => {
    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Dispatch custom event to notify Summary component
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQuantity = (id: string | number) => {
    const updatedCart = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id: string | number) => {
    const updatedCart = products
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0); // Remove product if quantity is 0
    updateCart(updatedCart);
  };

  const removeItem = (id: string | number) => {
    const updatedCart = products.filter((product) => product.id !== id); // Remove product
    updateCart(updatedCart);
  };

  return (
    <div className={styles.shoppingCarts}>
      <p>Shopping Cart</p>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className={styles.cartProduct}>
            <img
              className={styles.image}
              src={product.image}
              alt={product.name}
            />
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div className={styles.text}>
                  <p className={styles.h1}>{product.name}</p>
                  <p>{product.id}</p>
                </div>
              </div>
              <div className={styles.infoRight}>
                <div className={styles.counter}>
                  <button
                    className={styles.counterButton}
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    <img
                      className={styles.minus}
                      src="/assets/icons/No Edit.svg"
                      alt="minus"
                    />
                  </button>
                  <button className={styles.counterNumber}>
                    {product.quantity}
                  </button>
                  <button
                    className={styles.counterButton}
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <img
                      className={styles.plus}
                      src="/assets/icons/Edit.svg"
                      alt="plus"
                    />
                  </button>
                </div>
                <p className={styles.price}>${product.price}</p>
                <div
                  className={styles.buyNow}
                  className={styles.close}
                  onClick={() => removeItem(product.id)}
                >
                  <img src="/assets/icons/Close.svg" alt="close" />
                </div>
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
