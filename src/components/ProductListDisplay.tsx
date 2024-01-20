import ProductListItem from './ProductListItem'

interface ProductListDisplayProps {
    productList: Product[]
}

const ProductListDisplay = ({ productList }: ProductListDisplayProps) => {

    return (
        <ol className="p-2 lg:p-4 flex flex-wrap">            
            {productList.map(product => (
                <li key={product.id} className="p-2 lg:p-4 basis-1/2 lg:basis-1/4">
                    <ProductListItem product={product} />
                </li>
            ))}
        </ol>
    )
}

export default ProductListDisplay