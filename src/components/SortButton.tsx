import { HiCheck } from 'react-icons/hi2'
import { useThemeContext } from '@/context/ThemeProvider'

interface SortButtonProps {
	close: () => void
	selectSort?: (key: string) => void
	clearSort?: () => void
	sort?: string
	label: string
	current?: boolean
}

const SortButton = ({ close, selectSort, clearSort, sort, label, current = false }: SortButtonProps) => {

	const { isDarkMode } = useThemeContext()

	const handleClick = (sort?: string) => {
		if (selectSort && sort) selectSort(sort)
        if (clearSort) clearSort()
		close()
	}

	return (
		<button
			onClick={() => handleClick(sort)}
			title={label}
			className={`w-full px-4 py-2 flex items-center gap-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
		>
			<span>{label}</span>
			{current ? <HiCheck /> : null}					
		</button>
	)
}

export default SortButton