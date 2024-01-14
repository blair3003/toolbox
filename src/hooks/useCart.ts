import { useCallback, useMemo, useState } from 'react'

const useCart = () => {

    const [cart, setCart] = useState<Cart>({ items: [] })

    const total = useMemo(() => {
        return cart?.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) ?? 0
    }, [cart])

    const count = useMemo(() => {
        return cart?.items.reduce((count, item) => count + item.quantity, 0) ?? 0
    }, [cart])

    const addItemToCart = useCallback((product: Product, quantity = 1) => {
        if (quantity < 1) return
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

    const removeItemFromCart = useCallback((product: Product) => {
        const items = cart?.items.filter(item => item.product.id !== product.id) ?? []
        setCart(cart => ({
            ...cart,
            items
        }))
    }, [cart, setCart])

    const clearCart = useCallback(() => {
        setCart(cart => ({
            ...cart,
            items: []
        }))
    }, [setCart])

    const updateItemQuantity = (product: Product, quantity: number) => {
        if (quantity < 1) return removeItemFromCart(product)
        const item = cart?.items.find(item => item.product.id === product.id)
        if (item?.quantity === quantity) return
        const items = cart?.items.filter(item => item.product.id !== product.id) ?? []
        const updatedItems = item ? [...items, { ...item, quantity }] : [...items]
        setCart(cart => ({
            ...cart,
            items: updatedItems
        }))
    }

    return { cart, total, count, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart, setCart }
}

export default useCart