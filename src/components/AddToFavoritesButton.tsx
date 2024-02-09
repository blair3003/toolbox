'use client'

import { useAccountContext } from '@/context/AccountProvider'
import toast from 'react-hot-toast'

interface AddToFavoritesButtonProps {
    product: Product
}

const AddToFavoritesButton = ({ product }: AddToFavoritesButtonProps) => {

    const { account, addToFavorites, removeFromFavorites } = useAccountContext()

    const isFavorite = !!account?.favorites[product.id]

    const handleFavorites = () => {
        if (isFavorite) {
            removeFromFavorites(product)
            toast.success('Removed from favorites', { icon: '💔' })
        } else {
            addToFavorites(product)
            toast.success('Added to favorites', { icon: '❤️' })
        }
    }

    if (!account) return null 

    return (
        <button
            onClick={handleFavorites}
            title="Add to Favorites"
            className="w-full p-2 text-center rounded-full shadow text-sm lg:text-base text-black bg-orange-600 hover:bg-orange-700 focus-visible:bg-orange-700"        
        >
            {isFavorite ? "Added to favorites!" : "Add to favorites"}
        </button>
    )
}

export default AddToFavoritesButton