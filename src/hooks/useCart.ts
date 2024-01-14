import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useAccountContext } from '@/context/AccountProvider'

const useCart = () => {

    const [cart, setCart] = useState<Cart | null>(null)
    const { account, setAccountCart } = useAccountContext()
    const accountCartLoadedRef = useRef(false)

    const total = useMemo(() => {
        return cart?.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) ?? 0
    }, [cart])

    const count = useMemo(() => {
        return cart?.items.reduce((count, item) => count + item.quantity, 0) ?? 0
    }, [cart])

    const addItemToCart = useCallback((product: Product, quantity = 1) => {
        const item = cart?.items.find(item => item.product.id === product.id)
        const items = cart?.items.filter(item => item.product.id !== product.id) ?? []
        const updatedItems = item
            ? [...items, { ...item, quantity: item.quantity + quantity }]
            : [...items, { product, quantity }]
        setCart(cart => ({
            ...cart,
            items: updatedItems
        }))
    }, [cart, setCart])

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
        if (cart) setAccountCart(cart)
    }, [cart, setAccountCart])

    return { cart, total, count, addItemToCart }
}

export default useCart