import styles from "./Products.module.css";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className={styles.products}>
      <div className={styles.productsTags}>
        <div className={styles.tag}>
          <p>New Arrival</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.tag2}>
          <p>Bestseller</p>
        </div>
        <div className={styles.tag2}>
          <p>Featured Products</p>
        </div>
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

export default Products;
