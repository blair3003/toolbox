import { notFound } from 'next/navigation'
import getProductsFromCategorySlug from '@/lib/getProductsFromCategorySlug'
import getAllCategories from '@/lib/getAllCategories'
import getCategoryFromSlug from '@/lib/getCategoryFromSlug'
import ProductList from '@/components/ProductList'

export async function generateStaticParams() {
    const categories = await getAllCategories()
    return (categories) ? categories.map(category => ({ slug: category.slug })) : []
}

export default async function Category({ params }: { params: { slug: string } }) {

    const { slug } = params

    const products = await getProductsFromCategorySlug(slug)
    const category = await getCategoryFromSlug(slug)
	if (!products?.length || !category) notFound()

	return (
        <main>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <div>
                    <h1>{category.title}</h1>
                    <ProductList products={products} />
                </div>
            </div>
        </main>
	)
    
}