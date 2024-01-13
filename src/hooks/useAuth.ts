import { useEffect, useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '@/config/firebase'

const useAuth = () => {

    // const [authUser, setAuthUser] = useState<FirebaseUser | null>(null)
    const [authUser, setAuthUser] = useState<{ uid: string, name: string } | null>(null) // Null user
    const [pending, setPending] = useState(true)

    const setAuthUserToNull = () => setAuthUser(null) // Test funcs
    const setAuthUserToTest = () => setAuthUser({ uid: '1', name: 'Blair' }) // Test funcs

    useEffect(() => {
        // const unsubscribe = onAuthStateChanged(auth, user => {
        //     if (user) setAccount(user.uid)
        //     setAuthUser(user)
        //     setPending(false)
        // })
        // return () => unsubscribe()
    }, [authUser])

    return { authUser, setAuthUserToNull, setAuthUserToTest, pending }
}

export default useAuth