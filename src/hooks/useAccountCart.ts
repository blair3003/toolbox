'use client'

import { useAccountContext } from '@/context/AccountProvider'
import useCart from './useCart'
import { useCallback, useEffect, useRef } from 'react'

const useAccountCart = () => {

    const { account, setAccountCart } = useAccountContext()
    const { cart, clearCart, setCart, ...rest } = useCart()
    const accountCartLoadedRef = useRef(false)

    const mergeCarts = useCallback((carts: Cart[]) => {
        const mergedCart: Cart = {}
        carts.forEach(cart => {
            Object.keys(cart).forEach(item => {
                mergedCart[item] = {
                   product: cart[item].product,
                   quantity: cart[item].quantity + (mergedCart[item]?.quantity ?? 0)
                }
            })
        })
        return mergedCart
    }, [])

    useEffect(() => {
        if (account && !accountCartLoadedRef.current) {
            setCart(cart => cart ? mergeCarts([cart, account.cart]) : account.cart)
            accountCartLoadedRef.current = true            
        }
        if (!account && accountCartLoadedRef.current) {
            clearCart()
            accountCartLoadedRef.current = false
        }
    }, [account, accountCartLoadedRef, setCart, mergeCarts, clearCart])

    useEffect(() => {
        setAccountCart(cart)
    }, [cart, setAccountCart])

    return { cart, clearCart, ...rest }
}

export default useAccountCart