import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

interface ProductListFilterListToggleProps {
	toggle: () => void
}

const ProductListFilterListToggle = ({ toggle }: ProductListFilterListToggleProps) => {
	
	return (

		<button
		    onClick={toggle}
		    title="Filter list"
		    className="p-2 lg:px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
		>
		    <HiAdjustmentsHorizontal />
		    <span className="sr-only lg:not-sr-only">Filter</span>
		</button>
	)
}

export default ProductListFilterListToggle