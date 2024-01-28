'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'
import ProductList from './ProductList'

interface HomePageProps {
    products?: Product[]
}

const HomePage = ({ products }: HomePageProps) => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={`${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`mb-2 lg:mb-4 text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>Home Improvement</h1>
                        <p className="text-xs lg:text-base">The proof is in the pudding</p>
                    </header>
                    {products?.length ? <ProductList products={products} /> : null}
                </section>
            </div>
        </div>
    )
}

export default HomePage