'use client'

import { useCallback, useMemo } from 'react'
import useLocalCart from './useLocalCart'

const useCart = () => {

    const { cart, setCart } = useLocalCart()

    const count = useMemo(() => {
        return Object.values(cart).reduce((count, item) => count + item.quantity, 0)
    }, [cart])

    const gross = useMemo(() => {
        return Object.values(cart).reduce((gross, item) => gross + (item.product.price * item.quantity), 0)
    }, [cart])

    const discount = useMemo(() => {
        return Object.values(cart).reduce((discount, item) => discount + (item.product.price * (item.product.discount ?? 0) * item.quantity), 0)
    }, [cart])

    const subtotal = useMemo(() => {
        return gross - discount
    }, [gross, discount])

    const delivery = useMemo(() => {
        return 0
    }, [])

    const tax = useMemo(() => {
        return 0
    }, [])

    const total = useMemo(() => {
        return subtotal - delivery - tax
    }, [subtotal, delivery, tax])

    const addItemToCart = useCallback((product: Product, quantity = 1) => {
        if (quantity < 1) return
        const updatedCart = { ...cart }
        updatedCart[product.id] = {
            product,
            quantity: quantity + (updatedCart[product.id]?.quantity ?? 0)
        }
        setCart(updatedCart)
    }, [cart, setCart])

    const removeItemFromCart = useCallback((product: Product) => {
        const updatedCart = { ...cart }
        if (!updatedCart[product.id]) return
        delete updatedCart[product.id]
        setCart(updatedCart)
    }, [cart, setCart])

    const updateItemQuantity = useCallback((product: Product, quantity: number) => {
        if (quantity < 1) return removeItemFromCart(product)
        const updatedCart = { ...cart }
        if (!updatedCart[product.id]) return
        updatedCart[product.id] = {
            product,
            quantity
        }
        setCart(updatedCart)    
    }, [cart, setCart, removeItemFromCart])

    const clearCart = useCallback(() => {
        setCart({})
    }, [setCart])

    return { cart, count, gross, discount, subtotal, tax, delivery, total, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart, setCart }
}

export default useCart