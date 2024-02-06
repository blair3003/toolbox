'use client'

import Link from 'next/link'
import formatPrice from '@/lib/util/formatPrice'
import ProductImage from './ProductImage'
import RemoveFromCartButton from './RemoveFromCartButton'
import CartItemQuantitySelect from './CartItemQuantitySelect'

interface CartItemProps {
    item: {
        product: Product
        quantity: number
    }
}

const CartItem = ({ item: { product, quantity } }: CartItemProps) => {

    return (
        <div className="p-2 lg:p-4 mb-2 lg:mb-4 flex flex-nowrap gap-2 lg:gap-4 rounded-lg border-2 border-stone-300">
            <div className="basis-1/3">
                <Link href={`/product/${product.id}/${product.slug}`}>
                    <ProductImage src={product.image} alt={product.title} />
                </Link>
            </div>
            <div className="grow flex flex-col">
                <div className="grow flex items-start justify-between">
                    <span className="text-xs lg:text-base font-bold">{product.title}</span>
                    <span className="text-base lg:text-2xl font-bold">{formatPrice(product.price)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <CartItemQuantitySelect product={product} quantity={quantity} />
                    <RemoveFromCartButton product={product} />
                </div>
            </div>
        </div>
    )

}

export default CartItem