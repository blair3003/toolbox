import { useCallback, useState } from 'react'
import { useThemeContext } from '@/context/ThemeProvider'

interface PriceRangeInputProps {
	addFilter: (filter: string, options: any) => void
	close: () => void
}

const PriceRangeInput = ({ addFilter, close }: PriceRangeInputProps) => {

	const { isDarkMode } = useThemeContext()

	const [low, setLow] = useState<number | string>('')
	const [high, setHigh] = useState<number | string>('')

	const handleBlur = useCallback(() => {
		if (low && high) {
			addFilter('priceRange', { low: parseFloat(low.toString()) * 100, high: parseFloat(high.toString()) * 100 })
			setLow('')
			setHigh('')
			close()
		}
	}, [low, high, addFilter, setLow, setHigh, close])

	const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		if (low && high && e.key === 'Enter') {
			addFilter('priceRange', { low: parseFloat(low.toString()) * 100, high: parseFloat(high.toString()) * 100 })
			setLow('')
			setHigh('')
			close()
		}
	}, [low, high, addFilter, setLow, setHigh, close])

	return (
		<div className={`px-4 py-2 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
			<span className="text-nowrap cursor-default">Price range: </span>
			<div>
				<label htmlFor="price-range-low" className="sr-only">Low:</label>
				<input
					id="price-range-low"
					type="number"
					placeholder="$"
                    value={low ?? ''}
					onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
					onChange={e => setLow(e.target.value)}
					style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
					className="w-16 px-2 py-1 rounded-full cursor-pointer"
				/>
			</div>
			<div>
				<label htmlFor="price-range-high" className="sr-only">High:</label>
				<input
					id="price-range-high"
					type="number"
					placeholder="$"
                    value={high ?? ''}
					onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
					onChange={e => setHigh(e.target.value)}
					style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
					className="w-16 px-2 py-1 rounded-full cursor-pointer"
				/>
			</div>
		</div>
	)
}

export default PriceRangeInput