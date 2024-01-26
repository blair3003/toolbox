import { HiChevronDown } from 'react-icons/hi2'

interface ProductListSortListToggleProps {
	toggle: () => void
	sortLabel?: string
}

const ProductListSortListToggle = ({ toggle, sortLabel = '' }: ProductListSortListToggleProps) => {
	
	return (

		<button
		    onClick={toggle}
		    title="Sort list"
		    className="p-2 lg:px-4 rounded-full shadow flex items-center gap-1 text-black bg-stone-200 hover:bg-stone-300 focus:bg-stone-300"
		>
		    <span className="">Sort by: </span>
		    <span className="">{sortLabel}</span>
		    <HiChevronDown />
		</button>
	)
}

export default ProductListSortListToggle