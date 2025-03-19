"use client";

import { useEffect, useState } from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  const [subtotal, setSubtotal] = useState(0);
  
  // Default values for tax and shipping
  const defaultTax = 50;
  const defaultShipping = 29;

  // Function to update subtotal
  const updateSubtotal = () => {
    const storedProducts = JSON.parse(localStorage.getItem("cart") || "[]");

    const calculatedSubtotal = storedProducts.reduce(
      (total: number, product: any) =>
        total + product.price * product.quantity,
      0
    );

    setSubtotal(calculatedSubtotal);
  };

  useEffect(() => {
    updateSubtotal(); // Initial load

    // Listen for custom "cartUpdated" event
    const handleCartUpdate = () => {
      updateSubtotal(); // Update subtotal when cart changes
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate); // Clean up listener
    };
  }, []);

  // Set tax and shipping to 0 if subtotal is 0
  const tax = subtotal > 0 ? defaultTax : 0;
  const shipping = subtotal > 0 ? defaultShipping : 0;

  // Calculate total
  const total = subtotal + tax + shipping;

  return (
    <div className={styles.summary}>
      <p>Order Summary</p>
      <div className={styles.fieldsPrices}>
        <div className={styles.fields}>
          <div className={styles.labelField}>
            <p>Discount code / Promo code</p>
            <input className={styles.field} type="text" placeholder="Code" />
          </div>
          <div className={styles.labelField2Group}>
            <p>Your bonus card number</p>
            <div className={styles.labelField2}>
              <p>Enter Card Number</p>
              <div className={styles.applyBtn}>
                <p>Apply</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.prices}>
          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className={styles.taxes}>
            <div className={styles.tax}>
              <p className={styles.main}>Estimated Tax</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <div className={styles.tax}>
              <p className={styles.main}>Estimated shipping & Handling</p>
              <p>${shipping.toFixed(2)}</p>
            </div>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Summary;
