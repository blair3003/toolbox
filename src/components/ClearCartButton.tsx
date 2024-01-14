'use client'

import { useCartContext } from '@/context/CartProvider'

const ClearCartButton = () => {

    const { clearCart } = useCartContext()

    return (
        <button onClick={() => clearCart()}>
            Clear Cart
        </button>
    )
}

export default ClearCartButton