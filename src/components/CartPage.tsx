'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'
import CartItems from '@/components/CartItems'
import ClearCartButton from '@/components/ClearCartButton'

const CartPage = () => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={`${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`mb-2 lg:mb-4 text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>Shopping Cart</h1>
                        <p className="text-xs lg:text-base">The things you want</p>
                    </header>
                    <CartItems />
                    <ClearCartButton />
                </section>
            </div>
        </div>
    )
}

export default CartPage