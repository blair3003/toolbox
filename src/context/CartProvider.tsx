'use client'

import { createContext, useContext } from 'react'
import useAccountCart from '@/hooks/useAccountCart'

interface CartContextType {
    cart: Cart | null
    count: number
	gross: number
	discount: number
	subtotal: number
	tax: number
	delivery: number
	total: number
    addItemToCart: (product: Product, quantity?: number) => void
	removeItemFromCart: (product: Product) => void
	updateItemQuantity: (product: Product, quantity: number) => void
	clearCart: () => void
}

const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext) as CartContextType

const CartProvider = ({ children }: { children: React.ReactNode }) => {

	const cart: CartContextType = useAccountCart()

	return (
		<CartContext.Provider value={cart}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider