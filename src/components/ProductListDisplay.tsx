import Link from 'next/link'

interface ProductListDisplayProps {
    productList: Product[]
}

const ProductListDisplay = ({ productList }: ProductListDisplayProps) => {

    return (
        <div className="p-2 lg:p-4 bg-green-400">
            {/* List */}                
            {productList.map(product =>
                <div key={product.id}>
                    <p>productId: {product.id}</p>
                    <p>productTitle: <Link href={`/product/${product.id}/${product.slug}`}>{product.title}</Link></p>
                    <p>productPrice: {product.price}</p>
                </div>
            )}
        </div>
    )
}

export default ProductListDisplay