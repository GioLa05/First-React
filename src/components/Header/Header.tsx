import Link from "next/link";
import styles from "./Header.module.css";

type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.mheader}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/assets/icons/logo.png" alt="logo" />
          </Link>
        </div>
        <div className={styles.search}>
          <div className={styles.img}>
            <img src="/assets/icons/search.svg" alt="search" />
          </div>
          <input
            className={styles.searchButton}
            type="search"
            placeholder="Search"
          />
        </div>
        <div className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <img
              className={styles.img}
              src="/assets/icons/heart.svg"
              alt="heart"
            />
          </div>
          <div className={styles.icon}>
            <Link href="/cart">
              <img
                className={styles.img}
                src="/assets/icons/cart.svg"
                alt="cart"
              />
            </Link>
          </div>
          <div className={styles.icon}>
            <img
              className={styles.img}
              src="/assets/icons/user.svg"
              alt="user"
            />
          </div>
        </div>
        <div className={styles.burgerMenu}>
          <img
            className={styles.img}
            src="/assets/icons/Burger.svg"
            alt="burger-menu"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
