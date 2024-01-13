'use client'

import Link from 'next/link'

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

    return (
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <p>productId: {product.id}</p>
                    <p>productTitle: <Link href={`/product/${product.id}`}>{product.title}</Link></p>
                </div>
            )}
        </div>
    )
}

export default ProductList