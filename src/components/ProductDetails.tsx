import AddToFavoritesButton from './AddToFavoritesButton'
import AddToCartForm from './AddToCartForm'
import ProductPrice from './ProductPrice'
import ProductTitle from './ProductTitle'
import ProductDescription from './ProductDescription'

interface ProductDetailsProps {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {

    return (
        <div className="p-2 lg:p-4 flex flex-col gap-2 lg:gap-4">
            <ProductPrice price={product.price} />
            <ProductTitle title={product.title} />
            <ProductDescription description={product.description} />
            <AddToCartForm product={product} />
            <AddToFavoritesButton product={product} />
        </div>
    )
}

export default ProductDetails