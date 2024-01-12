import { useEffect, useState } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from '@/config/firebase'

const useAuth = () => {

    // const [authUser, setAuthUser] = useState<FirebaseUser | null>(null)
    const [authUser, setAuthUser] = useState({ id: '1', name: 'Blair' }) // Temp auth user
    // const [authUser, setAuthUser] = useState(null) // Null user
    const [pending, setPending] = useState(true)

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, user => {
    //         setAuthUser(user)
    //         setPending(false)
    //     })
    //     return () => unsubscribe()
    // }, [])

    return { authUser, pending }
}

export default useAuth