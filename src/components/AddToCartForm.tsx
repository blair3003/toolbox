'use client'

import { useState } from 'react'
import { useCartContext } from '@/context/CartProvider'
import { useThemeContext } from '@/context/ThemeProvider'

interface AddToCartFormProps {
    product: Product
}

const AddToCartForm = ({ product }: AddToCartFormProps) => {

    const { isDarkMode } = useThemeContext()
    const { addItemToCart } = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addItemToCart(product, quantity)
    }

    return (
        <form className="flex flex-col gap-2 lg:gap-4">
            <div>
                <label htmlFor="product-quantity" className="sr-only">Product Quantity</label>        
                <select
                    id="product-quantity"
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
                    className={`w-full p-2 rounded-lg shadow-2xl cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>              
            </div>
            <button
                onClick={handleSubmit}
                title="Add to Cart"
                className="w-full p-2 text-center rounded-full shadow text-sm lg:text-base text-white bg-stone-900 hover:bg-stone-950 focus:bg-stone-950"
            >
                Add to Cart
            </button>
        </form>
    )
}

export default AddToCartForm