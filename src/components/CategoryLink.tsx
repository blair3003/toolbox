import Link from 'next/link'

interface CategoryLinkProps {
	category: Category
}

const CategoryLink = ({ category }: CategoryLinkProps) => {

	return (
		<Link
			href={`/category/${category.slug}`}
			title={category.title}
			className="block text-black hover:bg-stone-200 focus:bg-stone-200 px-4 py-2 text-nowrap"
		>
			{category.title}			
		</Link>
	)
	
}

export default CategoryLink