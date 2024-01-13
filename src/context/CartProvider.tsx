'use client'

import { createContext, useContext } from 'react'
import useCart from '@/hooks/useCart'

interface CartContextType {
    cart: Cart | null
    total: number
    count: number
    addItemToCart: (product: Product, quantity?: number) => void
}

const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext) as CartContextType

const CartProvider = ({ children }: { children: React.ReactNode }) => {

	const cart: CartContextType = useCart()

	return (
		<CartContext.Provider value={cart}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider