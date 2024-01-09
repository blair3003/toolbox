"use client"

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

    return (
        <div>
            {products.map(product =>
                <div key={product.id}>
                    <p>productId: {product.id}</p>
                    <p>productTitle: {product.title}</p>
                </div>
            )}
        </div>
    )
}

export default ProductList