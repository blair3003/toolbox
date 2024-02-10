import { Metadata } from 'next'
import FavoritesPage from '@/components/FavoritesPage'

export const metadata: Metadata = {
	title: 'Favorites'
}

export default function Favorites() {

	return <FavoritesPage />
}