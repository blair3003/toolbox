import { CiMenuFries } from 'react-icons/ci' 

interface CategoryListToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const CategoryListToggle = ({ toggle, toggleRef }: CategoryListToggleProps) => {

	return (
		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
			onClick={toggle}
			title="Categories"
			className="h-12 px-2 flex items-center gap-1 text-white text-sm hover:bg-orange-700 focus:bg-orange-700 rounded-full"
		>
			<CiMenuFries />
			<span>Categories</span>
		</button>
	)

}

export default CategoryListToggle