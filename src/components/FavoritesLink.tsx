import Link from 'next/link'
import { CiHeart } from 'react-icons/ci'

const FavoritesLink = () => {

	return (
		<Link
			href="/favorites"
			title="Favorite Items"
			className="h-12 w-12 grid place-content-center text-white text-3xl bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 rounded-full"
		>
			<span className="sr-only">Favorite Items</span>
			<CiHeart />
		</Link>
	)	
}

export default FavoritesLink