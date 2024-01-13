import { useEffect, useMemo, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'

const useCart = () => {

    const [cart, setCart] = useState<Cart | null>(null)
    const { authAccount: account } = useAuthContext()

    const total = useMemo(() => {
        return cart?.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) ?? 0
    }, [cart])

    const count = useMemo(() => {
        return cart?.items.reduce((count, item) => count + item.quantity, 0) ?? 0
    }, [cart])

    const addItemToCart = (product: Product, quantity = 1) => {

        const item = cart?.items.find(item => item.product.id === product.id)
        const items = cart?.items.filter(item => item.product.id !== product.id) ?? []

        const updatedItems = item
            ? [...items, { ...item, quantity: item.quantity + quantity }]
            : [...items, { product, quantity }]

        setCart(cart => ({
            ...cart,
            items: updatedItems
        }))
    }

    useEffect(() => {
        if (account) setCart(account.cart)
    }, [account])

    useEffect(() => {
        if (cart) {
            // Update account cart
        }
    }, [cart])

    return { cart, total, count, addItemToCart }
}

export default useCart