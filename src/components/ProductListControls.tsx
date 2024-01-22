import { HiChevronDown } from 'react-icons/hi2'
import ProductListFilters from './ProductListFilters'
import ProductListFilterMenu from './ProductListFilterMenu'

interface ProductListControlsProps {
    productList: Product[]
    filters: string[]
    addFilter: (filter: string, options: any) => void
    removeFilter: (filter: string) => void
}

const ProductListControls = ({ productList, filters, addFilter, removeFilter }: ProductListControlsProps) => {

    return (
        <div className="p-2 lg:p-4">
            <div className="mb-2 lg:mb-4 flex items-center justify-between gap-2 lg:gap-4">
                <div>
                    <ProductListFilterMenu productList={productList} addFilter={addFilter} />
                </div>
                {/* results */}
                <div className="grow text-left lg:text-right">
                    <span>({productList.length} results)</span>
                </div>
                {/* sort */}
                <button
                    className="py-2 px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
                >
                    <span>Sort by:</span>
                    <HiChevronDown />
                </button>
            </div>
            <ProductListFilters filters={filters} removeFilter={removeFilter} />
        </div>
    )
}

export default ProductListControls