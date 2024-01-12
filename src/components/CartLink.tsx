import Link from 'next/link'
import { CiShoppingCart } from 'react-icons/ci'
import CartItemCount from './CartItemCount'

const CartLink = () => {

	return (
		<Link
			href="/cart"
            title="Shopping Cart"
			className="relative h-12 w-12 grid place-content-center text-white text-3xl bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 rounded-full group"
		>
            {/* <span className="sr-only">Shopping Cart</span> Clash between sr-only class and relative parent causing focus outline to deform */}
            <CiShoppingCart />
            <CartItemCount />
		</Link>
	)	
}

export default CartLink