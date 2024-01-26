import { HiChevronDown } from 'react-icons/hi2'
import ProductListFilters from './ProductListFilters'
import ProductListFilterMenu from './ProductListFilterMenu'
import ProductListSortMenu from './ProductListSortMenu'

interface ProductListControlsProps {
    productList: Product[]
    filters: string[]
    addFilter: (filter: string, options: any) => void
    removeFilter: (filter: string) => void
    sort: string
    sorts: { key: string; label: string; }[]
    selectSort: (key: string) => void
    clearSort: () => void
}

const ProductListControls = ({ productList, filters, addFilter, removeFilter, sort, sorts, selectSort, clearSort }: ProductListControlsProps) => {

    return (
        <div className="p-2 lg:p-4">
            <div className="mb-2 lg:mb-4 flex items-center justify-between gap-2 lg:gap-4">
                <div>
                    <ProductListFilterMenu productList={productList} addFilter={addFilter} />
                </div>
                <div className="grow text-left lg:text-right">
                    <span>({productList.length} results)</span>
                </div>
                <div>
                	<ProductListSortMenu sort={sort} sorts={sorts} selectSort={selectSort} clearSort={clearSort} />
                </div>
            </div>
            <ProductListFilters filters={filters} removeFilter={removeFilter} />
        </div>
    )
}

export default ProductListControls