import { useEffect, useMemo, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'

const useCart = () => {

    const [cart, setCart] = useState<Cart | null>(null)
    const { authAccount: account } = useAuthContext()

    const total = useMemo(() => {
        return cart?.items.reduce((total, item) => total + (item.product.price * item.quantity), 0) ?? 0
    }, [cart])

    useEffect(() => {
        if (account) setCart(account.cart)
    }, [account])

    return { cart, total }
}

export default useCart