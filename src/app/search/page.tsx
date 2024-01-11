import { notFound, redirect } from 'next/navigation'
import getProductsFromSearchTerm from '@/lib/getProductsFromSearchTerm'
import ProductList from '@/components/ProductList'

export default async function Search({ searchParams }: { searchParams: { q: string } }) {

	const { q: searchTerm } = searchParams
	if (!searchTerm) redirect('/')

    const products = await getProductsFromSearchTerm(searchTerm)
	if (!products?.length) notFound()

    return (
        <div>
            <div>Search term: {searchTerm}</div>
            <ProductList products={products} />
        </div>
    )
}