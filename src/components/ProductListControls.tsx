import { HiAdjustmentsHorizontal, HiChevronDown } from 'react-icons/hi2'

interface ProductListControlsProps {
    productList: Product[]
    addFilter: (filter: string, options: any) => void
}

const ProductListControls = ({ productList, addFilter }: ProductListControlsProps) => {

    return (
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
                    ({productList.length} results)
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
    )
}

export default ProductListControls