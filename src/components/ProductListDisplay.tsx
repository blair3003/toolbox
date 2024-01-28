import useProductListPagination from '@/hooks/useProductListPagination'
import ProductListItem from './ProductListItem'
import ProductListPagination from './ProductListPagination'

interface ProductListDisplayProps {
    productList: Product[]
}

const ProductListDisplay = ({ productList }: ProductListDisplayProps) => {

    const { paginatedProducts, page, pageCount, pageBlock, changePage, nextBlock, nextPage, prevPage } = useProductListPagination(productList)

    return (
        <div className="p-2 lg:p-4">
            <ol className="flex flex-wrap mb-2 lg:mb-4">            
                {[...(paginatedProducts.get(page) ?? [])].map(product => (
                    <li key={product.id} className="p-2 lg:p-4 basis-1/2 lg:basis-1/4">
                        <ProductListItem product={product} />
                    </li>
                ))}
            </ol>
            <ProductListPagination page={page} pageCount={pageCount} pageBlock={pageBlock} changePage={changePage} nextBlock={nextBlock} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}

export default ProductListDisplay