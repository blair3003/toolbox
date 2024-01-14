import { useAccountContext } from '@/context/AccountProvider'
import useCart from './useCart'
import { useCallback, useEffect, useRef } from 'react'

const useAccountCart = () => {

    const { account, setAccountCart } = useAccountContext()
    const { cart, total, count, addItemToCart, clearCart, setCart } = useCart()
    const accountCartLoadedRef = useRef(false)

    const mergeCarts = useCallback((carts: Cart[]) => {
        const productMap: Record<string, { product: Product; quantity: number }> = {}
        carts.forEach(cart => {
            cart.items.forEach(item => {
                const { product, quantity } = item
                productMap[product.id] = {
                    product,
                    quantity: (productMap[product.id]?.quantity || 0) + quantity
                }
            })
        })
        const mergedCart: Cart = { items: Object.values(productMap) }
        return mergedCart
    }, [])

    useEffect(() => {
        if (account && !accountCartLoadedRef.current) {
            setCart(cart => cart ? mergeCarts([cart, account.cart]) : account.cart)
            accountCartLoadedRef.current = true            
        }
        if (!account && accountCartLoadedRef.current) {
            setCart(null)
            accountCartLoadedRef.current = false
        }
    }, [account, accountCartLoadedRef, mergeCarts])

    useEffect(() => {
        setAccountCart(cart)
    }, [cart, setAccountCart])

    return { cart, total, count, addItemToCart, clearCart }
}

export default useAccountCart