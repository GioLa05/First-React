'use client'

import { Product } from '@/types/types'
import { handleCartAction } from '@/utils/handleAddToCart'
import { useEffect, useState } from 'react'
import styles from './Products.module.css'

type Props = {}

const Products = (props: Props) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((error) => console.error('Error fetching data', error))
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

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
        {data.map((product: Product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.favoriteBtn}>
              <img
                src="/assets/icons/Favorite_duotone.svg"
                alt="Favorite_duotone"
              />
            </div>
            <div className={styles.iphone}>
              <img src={product.image} alt="Iphone" />
            </div>
            <div className={styles.infoBuy}>
              <div className={styles.info}>
                <p>{product.name}</p>
                <p className={styles.price}>${product.price}</p>
              </div>
              <div className={styles.buyNow}>
                <button onClick={() => handleCartAction(product, 'add')}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
