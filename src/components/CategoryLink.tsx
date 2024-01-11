import Link from 'next/link'

interface CategoryLinkProps {
	category: Category
}

const CategoryLink = ({ category }: CategoryLinkProps) => {

	return (
		<Link
			href={`/category/${category.slug}`}
			className="block text-stone-700 hover:bg-stone-200 px-4 py-2 text-nowrap"
		>
			{category.title}			
		</Link>
	)
	
}

export default CategoryLink