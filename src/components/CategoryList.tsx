'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import CategoryLink from './CategoryLink'

interface CategoryListProps {
    categories: Category[]
	isOpen: boolean
}

const CategoryList = ({ categories, isOpen }: CategoryListProps) => {

    const { isDarkMode } = useThemeContext()

	return (
		<ul className={`absolute z-50 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-100 border-stone-200'}`}>
			{categories?.map(category => 
				<li key={category.id}>
					<CategoryLink category={category} />
				</li>
			)}
		</ul>
	)
}

export default CategoryList