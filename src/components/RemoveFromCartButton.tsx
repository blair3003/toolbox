'use client'

import { useCartContext } from '@/context/CartProvider'

interface RemoveFromCartButtonProps {
    product: Product
}

const RemoveFromCartButton = ({ product }: RemoveFromCartButtonProps) => {

    const { removeItemFromCart } = useCartContext()

    return (
        <button onClick={() => removeItemFromCart(product)}>
            Remove from Cart
        </button>
    )
}

export default RemoveFromCartButton