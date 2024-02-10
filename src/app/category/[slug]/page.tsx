import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import getProductsFromCategorySlug from '@/lib/firestore/getProductsFromCategorySlug'
import getAllCategories from '@/lib/firestore/getAllCategories'
import getCategoryFromSlug from '@/lib/firestore/getCategoryFromSlug'
import CategoryPage from '@/components/CategoryPage'

export async function generateStaticParams() {
    const categories = await getAllCategories()
    return (categories) ? categories.map(category => ({ slug: category.slug })) : []
}

export async function generateMetadata({ params }: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = params
    const category = await getCategoryFromSlug(slug)
    return {
        title: category?.title,
    }
}

export default async function Category({ params }: { params: { slug: string } }) {

    const { slug } = params

    const products = await getProductsFromCategorySlug(slug)
    const category = await getCategoryFromSlug(slug)
	if (!products?.length || !category) notFound()

	return <CategoryPage category={category} products={products} />    
}