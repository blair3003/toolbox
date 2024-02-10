import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import getProductsFromSearchTerm from '@/lib/firestore/getProductsFromSearchTerm'
import SearchPage from '@/components/SearchPage'

export const metadata: Metadata = {
	title: 'Search'
}

export default async function Search({ searchParams }: { searchParams: { q: string } }) {

	const { q: searchTerm } = searchParams
	if (!searchTerm) redirect('/')

    const products = await getProductsFromSearchTerm(searchTerm)

    return <SearchPage searchTerm={searchTerm} products={products} />
}