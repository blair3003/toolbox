import { HiAdjustmentsHorizontal, HiChevronDown } from 'react-icons/hi2'
import ProductListFilters from './ProductListFilters'

interface ProductListControlsProps {
    productList: Product[]
    filters: string[]
    addFilter: (filter: string, options: any) => void
    removeFilter: (filter: string) => void
}

const ProductListControls = ({ productList, filters, addFilter, removeFilter }: ProductListControlsProps) => {

    const category = { title: "Smert", slug: "smartphones" }

    return (
        <div className="p-2 lg:p-4">
            <div className="mb-2 lg:mb-4 flex items-center justify-between gap-2 lg:gap-4">
                {/* filter */}
                <button
                    onClick={() => addFilter('category', { category })}
                    className="p-2 lg:px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
                >
                    <HiAdjustmentsHorizontal />
                    <span className="hidden lg:block">Filter</span>
                    <span className="sr-only">Filter</span>
                </button>
                {/* results */}
                <div className="grow text-left lg:text-right">
                    <span>
                        ({productList.length} results)
                    </span>
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