import { useThemeContext } from '@/context/ThemeProvider'
import { HiBars2 } from 'react-icons/hi2' 

interface CategoryListToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const CategoryListToggle = ({ toggle, toggleRef }: CategoryListToggleProps) => {

	const { isDarkMode } = useThemeContext()

	return (
		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
			onClick={toggle}
			title="Categories"
			className={`h-12 px-4 flex items-center gap-1 text-xl font-bold rounded-full ${isDarkMode ? "hover:text-white focus:text-white hover:bg-stone-700 focus:bg-stone-700" : "text-white hover:text-black focus:text-black hover:bg-white focus:bg-white"}`}
		>
			<HiBars2 />
			<span className="text-sm mt-0.5">Categories</span>
		</button>
	)

}

export default CategoryListToggle