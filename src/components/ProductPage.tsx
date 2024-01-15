import ProductDetails from './ProductDetails'

interface ProductPageProps {
    product: Product
}

const ProductPage = ({ product }: ProductPageProps) => {

	return (
		<section className="p-2 lg:p-4 grid lg:grid-cols-3 gap-2 lg:gap-4">
			<h1 className="sr-only">{product.title}</h1>

			<section className="lg:col-span-2 bg-red-400">
				<h2 className="">Product Image</h2>
				<div className="aspect-[5/4]"></div>
			</section>


			<section className="lg:row-span-2 bg-blue-600">
				<h2 className="">Product Details</h2>
                <ProductDetails product={product} />
			</section>


			<section className="lg:col-span-2 lg:row-span-2 bg-green-400">
				<h2 className="">Product Reviews</h2>
			</section>

		</section>
	)
}

export default ProductPage