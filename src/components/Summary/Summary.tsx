import styles from "./Summary.module.css";

type Props = {};

const Summary = (props: Props) => {
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
            <p>$0</p>
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
            <p>$0</p>
          </div>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default Summary;