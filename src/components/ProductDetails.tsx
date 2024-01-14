'use client'

import AddToCartButton from './AddToCartButton'

interface ProductDetailsProps {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {

    return (
        <div>
            <p>productId: {product.id}</p>
            <p>productTitle: {product.title}</p>
            <AddToCartButton product={product} />
        </div>
    )
}

export default ProductDetails