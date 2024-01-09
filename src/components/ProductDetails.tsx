"use client"

interface ProductDetailsProps {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {

    return (
        <div>
            <p>productId: {product.id}</p>
            <p>productTitle: {product.title}</p>
        </div>
    )
}

export default ProductDetails