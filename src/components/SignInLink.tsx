'use client'

import Link from 'next/link'
import { HiUser } from 'react-icons/hi2'
import { useAuthContext } from '@/context/AuthProvider'
import { useThemeContext } from '@/context/ThemeProvider'

const SignInLink = () => {

    const { setAuthUserToTest } = useAuthContext()
    const { isDarkMode } = useThemeContext()

	return (
		<Link
            href="/login"
            className={`h-8 w-8 lg:h-12 lg:w-auto px-2 lg:px-4 flex items-center gap-1 text-3xl font-bold rounded-full ${isDarkMode ? "hover:text-white focus:text-white hover:bg-stone-700 focus:bg-stone-700" : "text-white hover:text-black focus:text-black hover:bg-white focus:bg-white"}`}
        >
            <span className="sr-only lg:not-sr-only text-sm">Sign in</span>
            <HiUser />

        </Link>
	)
}

export default SignInLink