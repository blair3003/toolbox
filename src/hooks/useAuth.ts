import { useEffect, useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '@/config/firebase'
import getAccountFromUID from '@/lib/getAccountFromUID'

const useAuth = () => {

    // const [authUser, setAuthUser] = useState<FirebaseUser | null>(null)
    const [authUser, setAuthUser] = useState({ uid: '1', name: 'Blair' }) // Temp auth user
    // const [authUser, setAuthUser] = useState(null) // Null user
    const [authAccount, setAuthAccount] = useState<Account | null>(null)
    const [pending, setPending] = useState(true)
    
    useEffect(() => {
        const setAccount = async (uid: string) => {
            try {
                const response = await fetch(`http://localhost:3000/api/accounts/${uid}`)
                const account: Account = await response.json()
                if (account) setAuthAccount(account)
            } catch (err) {
                console.log(err)
            }
        }
        if (authUser) setAccount(authUser.uid)
        // const unsubscribe = onAuthStateChanged(auth, user => {
        //     if (user) setAccount(user.uid)
        //     setAuthUser(user)
        //     setPending(false)
        // })
        // return () => unsubscribe()
    }, [])

    return { authUser, authAccount, pending }
}

export default useAuth