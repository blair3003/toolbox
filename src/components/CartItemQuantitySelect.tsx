import { useCartContext } from '@/context/CartProvider'
import QuantitySelect from './QuantitySelect'

interface CartItemQuantitySelectProps {
    product: Product
    quantity: number
}

const CartItemQuantitySelect = ({ product, quantity }: CartItemQuantitySelectProps) => {

    const { updateItemQuantity } = useCartContext()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(`change quantity`)
        console.log(e.target.value)
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="product-quantity" className="sr-only">Product Quantity</label>
            <QuantitySelect id="product-quantity" onChange={handleChange} />
        </form>

    )
}

export default CartItemQuantitySelect