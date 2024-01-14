import { useCallback, useMemo, useState } from 'react'

const useCart = () => {

    const [cart, setCart] = useState<Cart | null>(null)

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

    const clearCart = useCallback(() => {
        setCart(null)
    }, [setCart])

    return { cart, total, count, addItemToCart, clearCart, setCart }
}

export default useCart