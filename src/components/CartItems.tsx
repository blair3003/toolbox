'use client'

import { useCartContext } from '@/context/CartProvider'
import RemoveFromCartButton from './RemoveFromCartButton'
import UpdateQuantityButton from './UpdateQuantityButton'

const CartItems = () => {

    const { cart, total } = useCartContext()
    if (!cart) return null

    return (
        <div>
            <div>
                {Object.keys(cart).map(item => 
                    <div key={cart[item].product.id}>
                        <p>Product: {cart[item].product.title}</p>
                        <p>Price: {cart[item].product.price}</p>
                        <p>Quantity: {cart[item].quantity}</p>
                        <UpdateQuantityButton product={cart[item].product} quantity={7} />
                        <RemoveFromCartButton product={cart[item].product} />
                    </div>    
                )}
            </div>
            <div>
                <p>Total: {total}</p>
            </div>
        </div>
    )

}

export default CartItems