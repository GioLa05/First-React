import ShoppingCartWrapper from '@/components/ShoppingCart/ShoppingCartWrapper'
import styles from './page.module.css'

export default function CartRoute() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <ShoppingCartWrapper />
      </div>
    </div>
  )
}
