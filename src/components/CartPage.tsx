'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'
import CartList from '@/components/CartList'
import ClearCartButton from '@/components/ClearCartButton'
import { useCartContext } from '@/context/CartProvider'
import CartDetails from './CartDetails'

const CartPage = () => {

    const { isDarkMode } = useThemeContext()
    const { count } = useCartContext()

    return (
        <div className={`${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>{count} item{`${count === 1 ? '' : 's'}`} in your cart</h1>
                    </header>
                    {count ?
                        <div className="grid lg:grid-cols-3 gap-2 lg:gap-4">
                            <section className="p-2 lg:p-4 lg:col-span-2">
                                <h2 className="sr-only">Cart items</h2>
                                <CartList />
                            </section>
                            <section className="p-2 lg:p-4 lg:col-span-1">
                                <h2 className="sr-only">Cart details</h2>
                                <CartDetails />
                            </section>
                        </div>
                    : null}
                </section>
            </div>
        </div>
    )
}

export default CartPage