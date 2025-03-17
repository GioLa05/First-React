'use client'
import { ProductWithQuantity } from '@/types/types'
import styles from './Summary.module.css'

const Summary = ({ products }: { products: ProductWithQuantity[] }) => {
  const subtotal = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  )

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
            <p>{subtotal}$</p>
          </div>
          <div className={styles.taxes}>
            <div className={styles.tax}>
              <p className={styles.main}>Estimated Tax</p>
              <p>$50</p>
            </div>
            <div className={styles.tax}>
              <p className={styles.main}>Estimated shipping & Handling</p>
              <p>$29</p>
            </div>
          </div>
          <div className={styles.total}>
            <p>Total</p>
            <p>${(subtotal + 50 + 29).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  )
}

export default Summary
