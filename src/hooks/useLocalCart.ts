'use client'

import { useEffect, useState } from 'react'
import { useAccountContext } from '@/context/AccountProvider'

const LOCAL_STORAGE_KEY = 'toolbox-cart'

const useLocalCart = () => {

	const { account } = useAccountContext()

	const [cart, setCart] = useState<Cart>({})
    const [isCartInitialized, setIsCartInitialized] = useState(false)

	useEffect(() => {
        if (isCartInitialized) {
            account
                ? localStorage.removeItem(LOCAL_STORAGE_KEY)
                : localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
        }
	}, [account, cart, isCartInitialized])

    useEffect(() => {
        const initCart = () => {
            const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
            if (stored) setCart(JSON.parse(stored) as Cart)
            setIsCartInitialized(true)
        }
        initCart()
    }, [])

	return { cart, setCart }
}

export default useLocalCart