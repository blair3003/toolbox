'use client'

interface AddToFavoritesButtonProps {
    product: Product
}

const AddToFavoritesButton = ({ product }: AddToFavoritesButtonProps) => {

    return (
        <button
            onClick={() => console.log(`Adding to favorites!`)}
            title="Add to Favorites"
            className="w-full p-2 text-center rounded-full shadow text-sm lg:text-base text-black bg-orange-600 hover:bg-orange-700 focus:bg-orange-700"        
        >
            Add to favorites
        </button>
    )
}

export default AddToFavoritesButton