import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'
import { getAccount } from '@/lib/firestore/getAccount'

const useAccount = () => {

    const { authUser } = useAuthContext()
    const [account, setAccount] = useState<Account | null>(null)
    const effectRanOnceRef = useRef(false)

    const favorites = useMemo(() => Object.values(account?.favorites || []), [account])

    const setAccountCart = useCallback((cart: Cart | null) => {
        setAccount(account => account ? cart ? ({ ...account, cart }) : ({ ...account, cart: {} }) : null)
    }, [])

    const addToFavorites = useCallback((product: Product) => {
        if (account?.favorites[product.id]) return
        const favorites = { ...account?.favorites, [product.id]: product }
        setAccount(account => account ? ({ ...account, favorites }) : null)
    }, [account])

    const removeFromFavorites = useCallback((product: Product) => {
        if (!account?.favorites[product.id]) return
        const { [product.id]: _, ...favorites } = account.favorites
        setAccount(account => account ? ({ ...account, favorites }) : null)
    }, [account])
    
    useEffect(() => {
        const fetchAccount = async (authUser: FirebaseUser) => {
            const account = await getAccount(authUser)
            if (account) setAccount(account)
        }
        authUser
            ? fetchAccount(authUser)
            : setAccount(null)
    }, [authUser])

    useEffect(() => {
        if (account) {
            effectRanOnceRef.current
                ? console.log(`updating server`)
                : effectRanOnceRef.current = true
        }        
    }, [account, effectRanOnceRef])

    return { account, setAccountCart, favorites, addToFavorites, removeFromFavorites }
}

export default useAccount