import Summary from "@/components/Summary/Summary";
import styles from "./page.module.css";
import ShoppingCart from "@/components/ShoppingCart/ShoppingCart";

export default function CartRoute() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <ShoppingCart />
        <Summary />
      </div>
    </div>
  );
}
