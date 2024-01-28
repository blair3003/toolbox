import { useCallback, useEffect, useRef, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'

const useAccount = () => {

    const { authUser } = useAuthContext()
    const [account, setAccount] = useState<Account | null>(null)
    const effectRanOnceRef = useRef(false)

    const setAccountCart = useCallback((cart: Cart | null) => {
        setAccount(account => account ? cart ? ({ ...account, cart }) : ({ ...account, cart: {} }) : null)
    }, [])
    
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

    return { account, setAccountCart }
}

export default useAccount