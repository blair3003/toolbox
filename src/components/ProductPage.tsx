'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import ProductDetails from './ProductDetails'
import ProductImage from './ProductImage'

interface ProductPageProps {
    product: Product
}

const ProductPage = ({ product }: ProductPageProps) => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={`${isDarkMode ? "bg-black" : "bg-white" }`}>
            <div className="p-2 lg:p-4 lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4 grid lg:grid-cols-3 gap-2 lg:gap-4">
                    <h1 className="sr-only">{product.title}</h1>

                    <section className="p-2 lg:p-4 lg:col-span-2">
                        <h2 className="sr-only">Product Image</h2>
                        {product.image && <ProductImage src={product.image} alt={product.title} />}
                    </section>


                    <section className="p-2 lg:p-4 lg:row-span-2">
                        <h2 className="sr-only">Product Details</h2>
                        <ProductDetails product={product} />
                    </section>


                    <section className="p-2 lg:p-4 lg:col-span-2 lg:row-span-2">
                        <h2 className="sr-only">Product Reviews</h2>
                    </section>

                </section>
            </div>
        </div>
    )
}

export default ProductPage