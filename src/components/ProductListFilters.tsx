import ProductListFilterButton from './ProductListFilterButton'

interface ProductListFiltersProps {
    filters: string[]
    removeFilter: (filter: string) => void
}

const ProductListFilters = ({ filters, removeFilter }: ProductListFiltersProps) => {

    return (
        <div className="flex gap-1 flex-wrap">
            {filters.map(filter => <ProductListFilterButton key={filter} filter={filter} removeFilter={removeFilter} />)}
        </div>
    )

}

export default ProductListFilters