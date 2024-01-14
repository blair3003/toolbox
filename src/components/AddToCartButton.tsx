'use client'

import { useCartContext } from '@/context/CartProvider'

interface AddToCartButtonProps {
    product: Product
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {

    const { addItemToCart } = useCartContext()

    return (
        <button onClick={() => addItemToCart(product)}>
            Add to Cart
        </button>
    )
}

export default AddToCartButton