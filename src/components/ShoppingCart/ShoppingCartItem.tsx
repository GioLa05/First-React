import { ProductWithQuantity } from '@/types/types'
import { handleCartAction } from '@/utils/handleAddToCart'
import styles from './ShoppingCart.module.css'
type Props = {
  product: ProductWithQuantity
  handleUpdatePage: () => void
}

function ShoppingCartItem({ product, handleUpdatePage }: Props) {
  return (
    <div className={styles.cartProduct}>
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
            <button
              onClick={() => {
                handleCartAction(product, 'remove')
                handleUpdatePage()
              }}
            >
              <img
                className={styles.minus}
                src="/assets/icons/No Edit.svg"
                alt="no-edit"
              />
            </button>
            <button>{product.quantity}</button>
            <button
              onClick={() => {
                handleCartAction(product, 'add')
                handleUpdatePage()
              }}
            >
              <img
                className={styles.plus}
                src="/assets/icons/Edit.svg"
                alt="edit"
              />
            </button>
          </div>
          <p className={styles.price}>${product.price * product.quantity}</p>
          <img
            onClick={() => {
              handleCartAction(product, 'delete')
              handleUpdatePage()
            }}
            className={styles.close}
            src="/assets/icons/Close.svg"
            alt="close"
          />
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartItem
