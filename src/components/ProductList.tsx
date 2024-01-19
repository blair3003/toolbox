'use client'

import useProductListControls from '@/hooks/useProductListControls'
import Link from 'next/link'
import { HiAdjustmentsHorizontal, HiChevronDown } from 'react-icons/hi2'

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

    const { filteredList, productList, addFilter } = useProductListControls(products)

    return (
        <div className="p-2 lg:p-4 flex flex-col gap:2 lg:gap-4 text-xs lg:text-base">
            <div className="p-2 lg:p-4 flex items-center justify-between gap-2 lg:gap-4">
                {/* List controls */}
                <button
                    onClick={() => addFilter('priceRange', { low: 28, high: 39 })}
                    className="p-2 lg:px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
                >
                    {/* filter */}
                    <HiAdjustmentsHorizontal />
                    <span className="hidden lg:block">Filter</span>
                    <span className="sr-only">Filter</span>
                </button>
                <div className="grow text-left lg:text-right">
                    {/* results */}
                    <span>
                        ({products.length} results)
                    </span>
                </div>
                <button
                    className="py-2 px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
                >
                    {/* sort */}
                    <span>Sort by:</span>
                    <HiChevronDown />
                </button>
            </div>
            <div className="p-2 lg:p-4 bg-green-400">
                {/* List */}                
                {filteredList.map(product =>
                    <div key={product.id}>
                        <p>productId: {product.id}</p>
                        <p>productTitle: <Link href={`/product/${product.id}/${product.slug}`}>{product.title}</Link></p>
                        <p>productPrice: {product.price}</p>
                    </div>
                )}
            </div>
            <div className="p-2 lg:p-4 bg-yellow-400">
                {/* Pagination */}    
                
            </div>
        </div>
    )
}

export default ProductList