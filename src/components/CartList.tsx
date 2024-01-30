'use client'

import { useCartContext } from '@/context/CartProvider'
import CartItem from './CartItem'

const CartList = () => {

    const { cart } = useCartContext()
    if (!cart) return null

    return (
        <ul>
            {Object.values(cart).map(item => 
                <li key={item.product.id}>
                    <CartItem item={item} />
                </li>    
            )}
        </ul>
    )

}

export default CartList