'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'

const SignPage = () => {

    const { isDarkMode } = useThemeContext()
    
    useEffect(() => {
        const handleSignOut = async () => {
            await signOut(auth)
        }
        handleSignOut()
    }, [])

    return (
        <div className={`${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`mb-2 lg:mb-4 text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>Signed Out</h1>
                        <p className="text-xs lg:text-base">Registered users can sign in <Link href="/login" className="underline">here</Link>.</p>
                    </header>
                </section>
            </div>
        </div>
    )
}

export default SignPage