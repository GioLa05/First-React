import styles from "./Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img src="./assets/icons/white-logo.png" alt="white-logo" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className={styles.navigation}>
          <section className={styles.section}>
            <p className={styles.h1}>Services</p>
            <p>Bonus program</p>
            <p>Gift cards</p>
            <p>Credit and payment</p>
            <p>Service contracts</p>
            <p>Non-cash account</p>
            <p>Payment</p>
          </section>
          <section className={styles.section}>
            <p className={styles.h1}>Assistance to the buyer</p>
            <p>Find an order</p>
            <p>Terms of delivery</p>
            <p>Exchange and return of goods</p>
            <p>Guarantee</p>
            <p>Frequently asked questions</p>
            <p>Terms of use of the site</p>
          </section>
        </div>
      </div>
      <div className={styles.socials}>
        <img src="./assets/icons/Twitter.svg" alt="Twitter" />
        <img src="./assets/icons/Facebook.svg" alt="Facebook" />
        <img src="./assets/icons/Tiktok.svg" alt="Tiktok" />
        <img src="./assets/icons/Instagram.svg" alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
