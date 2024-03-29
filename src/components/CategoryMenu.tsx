import getAllCategories from '@/lib/firestore/getAllCategories'
import CategoryNav from './CategoryNav'

const CategoryMenu = async () => {

    const categories = await getAllCategories()
    if (!categories) return null

	return (
		<CategoryNav categories={categories} />
	)
}

export default CategoryMenu