import { useThemeContext } from '@/context/ThemeProvider'

interface PriceRangeButtonProps {
	priceRange: {
		label: string
		low: number
		high: number
	}
	addFilter: (filter: string, options: any) => void
	close: () => void
}

const PriceRangeButton = ({ priceRange, addFilter, close }: PriceRangeButtonProps) => {

	const { isDarkMode } = useThemeContext()

	const handleClick = () => {
		addFilter('priceRange', { low: priceRange.low, high: priceRange.high })
		close()
	}

	return (
		<button
			onClick={handleClick}
			title={priceRange.label}
			className={`w-full text-left px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
		>
			{priceRange.label}
		</button>
	)
}

export default PriceRangeButton