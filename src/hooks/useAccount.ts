import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAuthContext } from '@/context/AuthProvider'

const useAccount = () => {

    const { authUser } = useAuthContext()
    const [account, setAccount] = useState<Account | null>(null)

    const setAccountCart = useCallback((cart: Cart) => {
        setAccount(account => account ? ({ ...account, cart }) : null)
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

    return { account, setAccountCart }
}

export default useAccount