import { notFound } from 'next/navigation'
import getProductsFromCategorySlug from '@/lib/getProductsFromCategorySlug'
import ProductList from '@/components/ProductList'
import getAllCategories from '@/lib/getAllCategories'

export async function generateStaticParams() {
    const categories = await getAllCategories()
    return (categories) ? categories.map(category => ({ slug: category.slug })) : []
}

export default async function Category({ params }: { params: { slug: string } }) {

    const { slug } = params

    const products = await getProductsFromCategorySlug(slug)
	if (!products?.length) notFound()

	return (
		<ProductList products={products} />
	)
    
}