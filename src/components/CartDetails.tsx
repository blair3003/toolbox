import { useCartContext } from '@/context/CartProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import formatPrice from '@/lib/util/formatPrice'
import Link from 'next/link'


const CartDetails = () => {

    const { count, gross, discount, subtotal, tax, delivery, total } = useCartContext()
    const { isDarkMode } = useThemeContext()

    return (
        <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
            <div>
                {/* <PaymentMethodRadio /> */}
            </div>
            <div className="mb-2 lg:mb-4">
                <dl className="text-xs lg:text-base">
                    <div className="pb-2 grid grid-cols-2">
                        <dt className="font-bold">Item(s) total</dt>
                        <dd className="text-right">{formatPrice(gross, true)}</dd>
                    </div>
                    <div className="pb-2 mb-2 grid grid-cols-2 border-b-2 border-stone-400">                    
                        <dt className="font-bold">Discount</dt>
                        <dd className="text-right">{formatPrice(discount, true)}</dd>
                    </div>
                    <div className="pb-2 grid grid-cols-2">
                        <dt>Subtotal</dt>
                        <dd className="text-right">{formatPrice(subtotal, true)}</dd>
                    </div>
                    <div className="pb-2 grid grid-cols-2">                    
                        <dt>Delivery</dt>
                        <dd className="text-right">{formatPrice(delivery, true)}</dd>
                    </div>
                    <div className="pb-2 mb-2 grid grid-cols-2 border-b-2 border-stone-400">                    
                        <dt>Tax</dt>
                        <dd className="text-right">{formatPrice(tax, true)}</dd>
                    </div>
                    <div className="pb-2 grid grid-cols-2">                    
                        <dt className="font-bold">Total ({count} item{`${count === 1 ? '' : 's'}`})</dt>
                        <dd className="text-right font-bold">{formatPrice(total, true)}</dd>
                    </div>
                </dl>
            </div>
            <div>
                <Link
                    href="/checkout"
                    className="block w-full p-2 text-center rounded-full shadow text-sm lg:text-base text-white bg-stone-900 hover:bg-stone-950 focus:bg-stone-950"
                >
                    Proceed to checkout
                </Link>
            </div>
        </div>
    )
}

export default CartDetails