'use client'

import { createContext, useContext } from 'react'
import useCart from '@/hooks/useCart'

interface CartContextType {
    cart: Cart | null
    total: number
}

const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext) as CartContextType

const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const { cart, total } = useCart()

	const value: CartContextType = {
        cart,
        total
    }

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider