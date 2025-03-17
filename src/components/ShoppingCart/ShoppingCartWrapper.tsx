'use client'
import { ProductWithQuantity } from '@/types/types'
import { useEffect, useState } from 'react'
import Summary from '../Summary/Summary'
import ShoppingCart from './ShoppingCart'

type Props = {}

function ShoppingCartWrapper({}: Props) {
  const [products, setProducts] = useState<ProductWithQuantity[]>([])

  const handleUpdatePage = () => {
    const storedProducts = localStorage.getItem('cart')

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts))
    } else {
      setProducts([])
    }
  }

  useEffect(() => {
    handleUpdatePage()
  }, [])

  return (
    <>
      <ShoppingCart products={products} handleUpdatePage={handleUpdatePage} />
      <Summary products={products} />
    </>
  )
}

export default ShoppingCartWrapper
