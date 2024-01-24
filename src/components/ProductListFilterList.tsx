import { useThemeContext } from '@/context/ThemeProvider'
import CategorySelect from './CategorySelect'
import useFilterList from '@/hooks/useFilterList'

interface ProductListFilterListProps {
	isOpen: boolean
	close: () => void
	productList: Product[]
	addFilter: (filter: string, options: any) => void
}

const ProductListFilterList = ({ isOpen, close, productList, addFilter }: ProductListFilterListProps) => {

	const { isDarkMode } = useThemeContext()
	const { categories, priceRanges } = useFilterList(productList)
	
	return (

		<ul className={`absolute z-50 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-100 border-stone-200'}`}>
			<li>
				<CategorySelect categories={categories} addFilter={addFilter} close={close} />
			</li>
			{priceRanges.map((priceRange, index) =>
				<li key={index}>
					<button
						onClick={() => { addFilter('priceRange', { low: priceRange.low, high: priceRange.high }); close() }}
						title={priceRange.label}
						className={`w-full text-left px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
					>
						{priceRange.label}
					</button>
				</li>
			)}
		</ul>
	)
}

export default ProductListFilterList