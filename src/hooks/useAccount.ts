import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'

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
        const fetchAccount = async (uid: string) => {
            try {
                const response = await fetch(`http://localhost:3000/api/accounts/${uid}`)
                const data: Account = await response.json()
                if (data) setAccount(data)
            } catch (err) {
                console.error(err)
            }
        }
        authUser
            ? fetchAccount(authUser.uid)
            : setAccount(null)
    }, [authUser])

    useEffect(() => {
        if (account) {
            effectRanOnceRef.current
                ? console.log(`updating server`)
                : effectRanOnceRef.current = true
        }        
    }, [account, effectRanOnceRef])

    useEffect(() => {
        if (account) console.log(account)     
    }, [account])

    return { account, setAccountCart, favorites, addToFavorites, removeFromFavorites }
}

export default useAccount