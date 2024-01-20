import { HiXMark } from 'react-icons/hi2'

interface ProductListFilterButtonProps {
    filter: string
    removeFilter: (filter: string) => void
}

const ProductListFilterButton = ({ filter, removeFilter }: ProductListFilterButtonProps) => {

    return (   
        <button            
            onClick={() => removeFilter(filter)}
            title={filter}
            className="py-2 px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
        >
            <span>{filter}</span>
            <HiXMark />
        </button>
    )
}

export default ProductListFilterButton