import { useThemeContext } from '@/context/ThemeProvider'
import SortButton from './SortButton'

interface ProductListSortListProps {
	isOpen: boolean
	close: () => void
	sort: string
    sorts: { key: string; label: string; }[]
    selectSort: (key: string) => void
    clearSort: () => void
}

const ProductListSortList = ({ isOpen, close, sort, sorts, selectSort, clearSort }: ProductListSortListProps) => {

	const { isDarkMode } = useThemeContext()
	
	return (

		<ul className={`absolute z-50 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-300 border-stone-400'}`}>
			{sorts.map(({ key, label }) =>
				<li key={key}>
					<SortButton close={close} selectSort={selectSort} sort={key} label={label} current={key === sort} />
				</li>
			)}
			<li>
				<SortButton close={close} clearSort={clearSort} label="Clear sort" />
			</li>
		</ul>
	)
}

export default ProductListSortList