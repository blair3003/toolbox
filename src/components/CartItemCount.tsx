'use client'

const CartItemCount = () => {

	const itemCount = 4 // Get item count from cart context
	if (!itemCount) return null
	
	return (
		<span className="absolute top-0 right-0 lg:top-1 lg:right-1 h-4 w-4 grid place-content-center text-xs text-white bg-blue-800 group-hover:bg-blue-950 group-focus:bg-blue-950 rounded-full shadow">{itemCount}</span>
	)

}

export default CartItemCount