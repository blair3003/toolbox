import { useEffect, useState } from 'react'
import { useCartContext } from '@/context/CartProvider'
import { useThemeContext } from '@/context/ThemeProvider'

interface CartItemQuantitySelectProps {
    product: Product
    quantity: number
}

const CartItemQuantitySelect = ({ product, quantity }: CartItemQuantitySelectProps) => {

    const { updateItemQuantity } = useCartContext()
    const { isDarkMode } = useThemeContext()

    const [selection, setSelection] = useState(quantity)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelection(Number(e.target.value))
    }

    const handleClick = () => {
        if (selection > 0) {
            updateItemQuantity(product, selection)
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="product-quantity" className="sr-only">Product Quantity</label>        
            <select
                id="product-quantity"
                value={selection}
                onChange={handleChange}
                onClick={handleClick}
                style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
                className={`w-full p-2 rounded-lg shadow-2xl cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
        </form>

    )
}

export default CartItemQuantitySelect