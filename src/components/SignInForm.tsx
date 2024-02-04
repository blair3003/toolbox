'use client'

import { useEffect } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { FaGoogle } from 'react-icons/fa6'
import { useAccountContext } from '@/context/AccountProvider'
import { useAuthContext } from '@/context/AuthProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import { auth } from '@/config/firebase'

const SignInForm = () => {

    const { authUser } = useAuthContext()
    const { account } = useAccountContext()
    const { isDarkMode } = useThemeContext()

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider())
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault()
        // sign in
    }

    useEffect(() => {
        if (account && authUser) {
            // redirect
        }

    }, [account, authUser])

    return (
        <form
            className="w-full lg:max-w-sm mx-auto p-2 lg:p-4 border-2 rounded-lg border-stone-300"
        
        >

            <button
                type="submit"
                onClick={handleSignIn}
            
            >Sign In</button>

            <button type="button" onClick={signInWithGoogle} className={`w-full p-4 mb-2 rounded shadow uppercase text-sm ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="flex items-center justify-center gap-2">
                    <FaGoogle />
                    <span>Sign in with Google</span>
                </div>
            </button>

        </form>
    )
}

export default SignInForm