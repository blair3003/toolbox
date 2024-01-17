import { useThemeContext } from '@/context/ThemeProvider'
import Link from 'next/link'

interface CategoryLinkProps {
	category: Category
}

const CategoryLink = ({ category }: CategoryLinkProps) => {

    const { isDarkMode } = useThemeContext()

	return (
		<Link
			href={`/category/${category.slug}`}
			title={category.title}
			className={`block px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
		>
			{category.title}			
		</Link>
	)
	
}

export default CategoryLink