import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import SearchResults from '@/components/SearchResults'

export default async function Search({ searchParams }: { searchParams: { q: string } }) {

	const { q: searchTerm } = searchParams
	if (!searchTerm) redirect('/')

	return (
		<Suspense key={searchTerm} fallback={<p>loading</p>}>
			<SearchResults searchTerm={searchTerm} />
		</Suspense>
	)
}