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
		<ul className={`absolute z-50 mt-4 py-2 bg-white rounded ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600' : '' }`}>
			{categories?.map(category => 
				<li
					key={category.id}
					className=""
				>
					<CategoryLink category={category} />
				</li>
			)}
		</ul>
	)
}

export default CategoryList