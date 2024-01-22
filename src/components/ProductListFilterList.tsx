import { useThemeContext } from '@/context/ThemeProvider'

interface ProductListFilterListProps {
	isOpen: boolean
	productList: Product[]
	addFilter: (filter: string, options: any) => void
}

const ProductListFilterList = ({ isOpen, productList, addFilter }: ProductListFilterListProps) => {

	const { isDarkMode } = useThemeContext()

	// Create filter options based on product list -> pass productList to custom hook - useFilterList(productList)
	// Should return existing categories and suitable price ranges

	const category = { title: "Smert", slug: "smartphones" }
	
	return (

		<ul className={`absolute z-50 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-100 border-stone-200'}`}>
			<li>
				<button
					onClick={() => addFilter('category', { category })}
					title={`Category: ${category.title}`}
					className={`w-full text-left px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
				>
					{category.title}
				</button>
			</li>
			<li>
				<button
					onClick={() => addFilter('priceRange', { low: 1300, high: 1600 })}
					title={`Price range: $13 - $16`}
					className={`w-full text-left px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
				>
					Price range: $13 - $16
				</button>
			</li>
		</ul>
	)
}

export default ProductListFilterList