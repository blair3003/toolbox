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
                {cart.items.map(item => 
                    <div key={item.product.id}>
                        <p>Product: {item.product.title}</p>
                        <p>Price: {item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <UpdateQuantityButton product={item.product} quantity={-7} />
                        <RemoveFromCartButton product={item.product} />
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