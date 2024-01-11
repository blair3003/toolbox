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
			className="flex items-center gap-1 px-2 py-1 hover:bg-orange-700 rounded-full"
		>
			<CiMenuFries />
			<span className="text-sm">Categories</span>
		</button>
	)

}

export default CategoryListToggle