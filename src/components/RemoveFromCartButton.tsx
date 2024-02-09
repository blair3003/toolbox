'use client'

import { useRef } from 'react'
import { HiCheck, HiMiniTrash, HiXMark } from 'react-icons/hi2'
import { useCartContext } from '@/context/CartProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import toast from 'react-hot-toast'

interface RemoveFromCartButtonProps {
    product: Product
}

const RemoveFromCartButton = ({ product }: RemoveFromCartButtonProps) => {

    const { removeItemFromCart } = useCartContext()
    const { isDarkMode } = useThemeContext()

    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const handleRemoveItem = () => {
        removeItemFromCart(product)
        dialogRef.current?.close()
        toast.success('Removed from cart', { icon: '🛒' })
    }

    return (
        <>
            <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className={`w-8 h-8 lg:w-12 lg:h-12 grid place-content-center rounded-full hover:text-red-500 ${isDarkMode ? "text-white hover:bg-stone-700" : "text-black hover:bg-stone-300"}`}
            >
                <span className="sr-only">Remove from Cart</span>
                <HiMiniTrash />
            </button>
            <dialog
                ref={dialogRef}
                className={`p-2 lg:p-4 rounded-lg ${isDarkMode ? "" : ""}`}
            >
                <p className="mb-2 lg:mb-4">Remove item from cart?</p>
                <div className="flex items-center justify-around gap-2 lg:gap-4">
                    <button
                        type="button"
                        onClick={handleRemoveItem}
                        className="w-8 h-8 lg:w-12 lg:h-12 grid place-content-center rounded-full text-white bg-green-600"
                    >
                        <span className="sr-only">Yes</span>
                        <HiCheck />
                    </button>
                    <button
                        type="button"
                        onClick={() => dialogRef.current?.close()}
                        className="w-8 h-8 lg:w-12 lg:h-12 grid place-content-center rounded-full text-white bg-red-600"
                    >
                        <span className="sr-only">No</span>
                        <HiXMark />
                    </button>                    
                </div>
            </dialog>
        </>
    )
}

export default RemoveFromCartButton