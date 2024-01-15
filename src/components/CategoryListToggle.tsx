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
			className="h-12 px-4 flex items-center gap-1 text-xl font-bold text-white hover:text-black focus:text-black hover:bg-white focus:bg-white rounded-full"
		>
			<CiMenuFries />
			<span className="text-sm">Categories</span>
		</button>
	)

}

export default CategoryListToggle