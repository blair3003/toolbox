'use client'

import { useCartContext } from '@/context/CartProvider'

interface UpdateQuantityButtonProps {
    product: Product
    quantity: number
}

const UpdateQuantityButton = ({ product, quantity }: UpdateQuantityButtonProps) => {

    const { updateItemQuantity } = useCartContext()

    return (
        <button onClick={() => updateItemQuantity(product, quantity)}>
            Update quantity
        </button>
    )
}

export default UpdateQuantityButton