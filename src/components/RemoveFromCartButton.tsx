'use client'

import { useCartContext } from '@/context/CartProvider'
import { HiMiniTrash } from 'react-icons/hi2'

interface RemoveFromCartButtonProps {
    product: Product
}

const RemoveFromCartButton = ({ product }: RemoveFromCartButtonProps) => {

    const { removeItemFromCart } = useCartContext()

    return (
        <button onClick={() => removeItemFromCart(product)}>
            <span className="sr-only">Remove from Cart</span>
            <HiMiniTrash />
        </button>
    )
}

export default RemoveFromCartButton