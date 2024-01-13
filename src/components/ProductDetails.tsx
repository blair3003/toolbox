"use client"

import { useCartContext } from '@/context/CartProvider'

interface ProductDetailsProps {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {

    const { addItemToCart } = useCartContext()

    return (
        <div>
            <p>productId: {product.id}</p>
            <p>productTitle: {product.title}</p>
            <button onClick={() => addItemToCart(product)}>
                Add to Cart
            </button>
        </div>
    )
}

export default ProductDetails