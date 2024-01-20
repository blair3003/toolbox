'use client'

import useProductListControls from '@/hooks/useProductListControls'
import ProductListControls from './ProductListControls'
import ProductListDisplay from './ProductListDisplay'
import ProductListPagination from './ProductListPagination'

interface ProductListProps {
    products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {

    const { productList, ...rest } = useProductListControls(products)

    return (
        <div className="p-2 lg:p-4 flex flex-col gap:2 lg:gap-4 text-xs lg:text-base">
            <ProductListControls productList={productList} {...rest} />
            <ProductListDisplay productList={productList} />
            <ProductListPagination />
        </div>
    )
}

export default ProductList