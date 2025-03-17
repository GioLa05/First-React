'use client'

import { ProductWithQuantity } from '@/types/types'
import styles from './ShoppingCart.module.css'
import ShoppingCartItem from './ShoppingCartItem'

type Props = {
  products: ProductWithQuantity[]
  handleUpdatePage: () => void
}

const ShoppingCart = ({ products, handleUpdatePage }: Props) => {
  return (
    <div className={styles.shoppingCarts}>
      <p>Shopping Cart</p>
      {products.length > 0 ? (
        products.map((product: ProductWithQuantity) => (
          <ShoppingCartItem
            handleUpdatePage={handleUpdatePage}
            product={product}
            key={product.id}
          />
        ))
      ) : (
        <p>No products available to display.</p>
      )}
    </div>
  )
}

export default ShoppingCart
