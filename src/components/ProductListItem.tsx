import Link from 'next/link'
import ProductImage from './ProductImage'
import ProductTitle from './ProductTitle'
import ProductPrice from './ProductPrice'

interface ProductListItemProps {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {

    return (
        <Link
            href={`/product/${product.id}/${product.slug}`}
            title={product.title}
            className="block h-full"
        >
            <div>
                <ProductImage src={product.image} alt={product.title} />
            </div>
            <div className="p-1 lg:p-2">
                <ProductTitle title={product.title} styles="my-0.5 lg:my-1 line-clamp-2 overflow-hidden text-ellipsis whitespace-normal" />
                <ProductPrice price={product.price} />
            </div>
        </Link>
    )
}

export default ProductListItem