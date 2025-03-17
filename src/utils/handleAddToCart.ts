import { Product, ProductWithQuantity } from '@/types/types'

export const handleCartAction = (
  product: Product,
  action: 'add' | 'remove' | 'delete'
) => {
  const cart: ProductWithQuantity[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  )
  const existingProductIndex = cart.findIndex((p) => p.id === product.id)

  if (action === 'add') {
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
  } else if (action === 'remove') {
    if (existingProductIndex !== -1) {
      if (cart[existingProductIndex].quantity > 1) {
        cart[existingProductIndex].quantity -= 1
      } else {
        cart.splice(existingProductIndex, 1)
      }
    }
  } else if (action === 'delete') {
    if (existingProductIndex !== -1) {
      cart.splice(existingProductIndex, 1)
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart))
}
