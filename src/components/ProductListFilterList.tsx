import { useThemeContext } from '@/context/ThemeProvider'
import CategorySelect from './CategorySelect'
import useFilterList from '@/hooks/useFilterList'
import PriceRangeButton from './PriceRangeButton'
import PriceRangeInput from './PriceRangeInput'

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

		<ul className={`absolute z-50 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-300 border-stone-400'}`}>
			{categories.length ?
				<li>
					<CategorySelect categories={categories} addFilter={addFilter} close={close} />
				</li>
			: null}
			{priceRanges.map((priceRange, index) =>
				<li key={index}>
					<PriceRangeButton priceRange={priceRange} addFilter={addFilter} close={close} />
				</li>
			)}
			<li>
				<PriceRangeInput addFilter={addFilter} close={close} />
			</li>
		</ul>
	)
}

export default ProductListFilterList