'use client'

import useMenu from '@/hooks/useMenu'
import CategoryListToggle from './CategoryListToggle'
import CategoryList from './CategoryList'

interface CategoryNavProps {
    categories: Category[]
}

const CategoryNav = ({ categories }: CategoryNavProps) => {

	const { isOpen, toggle, ref } = useMenu()

	return (
		<nav className="relative">
			<CategoryListToggle toggle={toggle} toggleRef={ref} />
			<CategoryList categories={categories} isOpen={isOpen} />
		</nav>
	)
}

export default CategoryNav