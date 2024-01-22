import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

interface ProductListFilterListToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const ProductListFilterListToggle = ({ toggle, toggleRef }: ProductListFilterListToggleProps) => {
	
	return (

		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
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