'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { useEffect, useState } from 'react'

interface CategorySelectProps {
	categories: Category[]
	addFilter: (filter: string, options: any) => void
	close: () => void
}

const CategorySelect = ({ categories, addFilter, close }: CategorySelectProps) => {

    const { isDarkMode } = useThemeContext()
	const [category, setCategory] = useState<Category | null>(null)
    const [selection, setSelection] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(e.target.value)
    }

	const handleClick = () => {
        if (selection) {
            setCategory(categories.find(category => category.id === selection) ?? null)
            setSelection('')
            close()
        }
    }

	const handleKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
        if (selection && e.key === 'Enter') {
            setCategory(categories.find(category => category.id === selection) ?? null)
            setSelection('')
            close()
        }
    }

    useEffect(() => {
    	if (category) {
            addFilter('category', { category })
            setCategory(null)
        }
    }, [category, addFilter])

	return (
		<div className={`px-4 py-2 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
			<label htmlFor="category-select">Category:</label>
			<select
				id="category-select"
				onChange={handleChange}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
				value={selection}
                style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
                className="px-2 py-1 rounded-full cursor-pointer"
			>
                <option value="">-- Select --</option>
				{categories.map(category => (
					<option
						key={category.id}
						value={category.id}
					>
						{category.title}
					</option>
				))}					
			</select>
		</div>
	)
}

export default CategorySelect