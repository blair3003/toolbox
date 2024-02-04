import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/config/firebase'

const useAuth = () => {

    const [authUser, setAuthUser] = useState<FirebaseUser | null>(null)
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setAuthUser(user)
            setPending(false)
        })
        return () => unsubscribe()
    }, [authUser])

    return { authUser, pending }
}

export default useAuth