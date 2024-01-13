import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useAccountContext } from '@/context/AccountProvider'

const useCart = () => {

    const testCart: Cart = {
        items: [
            {
                product: {
                    id: "1",
                    title: "Toothbrush",
                    slug: "toothbrush",
                    category: [
                        "kitchen"
                    ],
                    price: 10
                }, 
                quantity: 1
            },                
            {
                product: {
                    id: "3",
                    title: "Electric Drill",
                    slug: "electric-drill",
                    category: [
                        "power-tools"
                    ],
                    price: 35
                }, 
                quantity: 1
            }
        ]
    }

    const mergedCart: Cart = useMemo(() => ({
        items: [
            {
                product: {
                    id: "1",
                    title: "Toothbrush",
                    slug: "toothbrush",
                    category: [
                        "kitchen"
                    ],
                    price: 10
                }, 
                quantity: 3
            },                
            {
                product: {
                    id: "2",
                    title: "Coffee",
                    slug: "coffee",
                    category: [
                        "kitchen"
                    ],
                    price: 5
                }, 
                quantity: 7
            },                
            {
                product: {
                    id: "3",
                    title: "Electric Drill",
                    slug: "electric-drill",
                    category: [
                        "power-tools"
                    ],
                    price: 35
                }, 
                quantity: 1
            }
        ]
    }), [])

    const [cart, setCart] = useState<Cart | null>(null)
    const { account, setAccountCart } = useAccountContext()
    const accountCartLoadedRef = useRef(false)

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

    const getMergedCarts = useCallback((cart1: Cart, cart2: Cart) => {
        console.log(`Merging:`)
        console.log(cart1)
        console.log(`With:`)
        console.log(cart2)
        return mergedCart
    }, [mergedCart])

    useEffect(() => {
        if (account && !accountCartLoadedRef.current) {
            setCart(cart => cart ? getMergedCarts(account.cart, cart) : account.cart)
            accountCartLoadedRef.current = true            
        }
        if (!account && accountCartLoadedRef.current) {
            setCart(null)
            accountCartLoadedRef.current = false
        }
    }, [account, accountCartLoadedRef, getMergedCarts])

    useEffect(() => {
        if (cart) {
            setAccountCart(cart)
        }
    }, [cart, setAccountCart])

    return { cart, total, count, addItemToCart }
}

export default useCart