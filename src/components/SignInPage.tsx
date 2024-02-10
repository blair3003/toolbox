'use client'

import { useThemeContext } from '@/context/ThemeProvider'
import { bigShoulders } from '@/fonts/bigShoulders'
import SignInForm from './SignInForm'
import Link from 'next/link'

const SignPage = () => {

    const { isDarkMode } = useThemeContext()

    return (
        <div className={`min-h-screen ${isDarkMode ? "text-white bg-dark-gradient" : "text-black bg-white" }`}>
            <div className="lg:max-w-screen-xl lg:mx-auto">
                <section className="p-2 lg:p-4">
                    <header className="p-2 lg:p-4 mb-2 lg:mb-4 text-left lg:text-center">
                        <h1 className={`mb-2 lg:mb-4 text-xl lg:text-3xl uppercase text-orange-600 ${bigShoulders.className}`}>Sign In</h1>
                    </header>
                    <SignInForm />
                </section>
            </div>
        </div>
    )
}

export default SignPage