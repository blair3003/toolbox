import CategoryLink from './CategoryLink'

interface CategoryListProps {
    categories: Category[]
	isOpen: boolean
}

const CategoryList = ({ categories, isOpen }: CategoryListProps) => {

	return (
		<ul className={`absolute mt-4 py-2 bg-white rounded ${isOpen ? 'block' : 'hidden'}`}>
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