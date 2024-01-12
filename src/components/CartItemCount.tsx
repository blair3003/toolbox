'use client'

const CartItemCount = () => {

	const itemCount = 4 // Get item count from cart context
	if (!itemCount) return null
	
	return (
		<span className="absolute top-1 right-1 h-4 w-4 grid place-content-center text-xs text-white bg-green-800 group-hover:bg-green-950 group-focus:bg-green-950 rounded-full shadow">{itemCount}</span>
	)

}

export default CartItemCount