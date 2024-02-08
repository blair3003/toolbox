'use client'

import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { FirebaseError } from '@firebase/util'
import { FaGoogle } from 'react-icons/fa6'
import { useAccountContext } from '@/context/AccountProvider'
import { useAuthContext } from '@/context/AuthProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import { auth } from '@/config/firebase'
import { redirect } from 'next/navigation'
import Loader from './Loader'

const SignInForm = () => {

    const { authUser } = useAuthContext()
    const { account } = useAccountContext()
    const { isDarkMode } = useThemeContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const signInWithCredentials = async (email: string, password: string) => {
        try {
            setDisabled(true)
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            setError('Invalid Credentials')
            console.error(error)
        } finally {
            setDisabled(false)
        }
    }

    const signInWithGoogle = async () => {
        try {
            setDisabled(true)
            await signInWithPopup(auth, new GoogleAuthProvider())
        } catch (error) {
            setError('Invalid Credentials')
            console.error(error)
        } finally {
            setDisabled(false)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email && password) signInWithCredentials(email, password)
    }

    useEffect(() => {
        if (account && authUser) {
            redirect(`/cart`)
        }
    }, [account, authUser])

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-sm mx-auto p-2 lg:p-4 border-2 rounded-lg border-stone-300"        
        >
            <div>
                {error && <span className="text-red-500 uppercase font-bold text-sm">{error}</span>}
            </div>

            <div className="">
                <label htmlFor="email" className="sr-only">Username</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
                    className={`p-4 mb-2 w-full rounded cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                    autoComplete="email"
                    disabled={disabled}
                    required
                />
            </div>

            <div className="">
                <label htmlFor="password" className="sr-only">Username</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ colorScheme: isDarkMode ? 'dark' : 'normal' }}
                    className={`p-4 mb-2 w-full rounded cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
                    autoComplete="current-password"
                    disabled={disabled}
                    required
                />
            </div>

            <button type="submit" disabled={disabled} className="w-full p-4 mb-2 uppercase text-sm rounded shadow text-black bg-orange-600 hover:bg-orange-700" >
                {disabled ? <Loader size={16} /> : <span>Sign In</span>}
            </button>

            <button type="button" disabled={disabled} onClick={signInWithGoogle} className={`w-full p-4 mb-2 rounded shadow uppercase text-sm text-white bg-black hover:bg-stone-950`}>
                <div className="flex items-center justify-center gap-2">
                    {disabled ? <Loader size={16} /> :
                    <>
                        <FaGoogle />
                        <span>Sign in with Google</span>
                    </>}
                </div>
            </button>

        </form>
    )
}

export default SignInForm