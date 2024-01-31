'use client'

import { useCallback, useMemo, useState } from 'react'
import useLocalCart from './useLocalCart'

const useCart = () => {

    const { cart, setCart } = useLocalCart()

    const total = useMemo(() => {
        return Object.values(cart).reduce((total, item) => total + (item.product.price * item.quantity), 0)
    }, [cart])

    const count = useMemo(() => {
        return Object.values(cart).reduce((count, item) => count + item.quantity, 0)
    }, [cart])

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

    return { cart, total, count, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart, setCart }
}

export default useCart