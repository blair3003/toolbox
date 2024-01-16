'use client'

import { useAuthContext } from '@/context/AuthProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import Link from 'next/link'
import { HiUser } from 'react-icons/hi2'

const SignInLink = () => {

    const { setAuthUserToTest } = useAuthContext()
    const { isDarkMode } = useThemeContext()

	const styles = "h-8 w-8 lg:h-12 lg:w-auto px-2 lg:px-4 flex items-center gap-1 text-3xl font-bold text-white hover:text-black focus:text-black hover:bg-white focus:bg-white rounded-full"
	const darkModeStyles = isDarkMode ? "hover:text-white focus:text-white hover:bg-stone-700 focus:bg-stone-700" : ""

	return (
		// <Link
        //     href="/login"
        //     className="h-12 px-2 flex items-center gap-1 text-white text-3xl hover:bg-orange-700 focus:bg-orange-700 rounded-full"
        // >
        //     <span className="hidden lg:inline-block text-sm">Sign in</span>
        //     <span className="sr-only">Sign in</span>
        //     <CiUser />

        // </Link>

				<button
					onClick={setAuthUserToTest}
                    title="Sign in"
					className={`${styles} ${darkModeStyles}`}
				>
					<span className="hidden lg:inline-block text-sm">Sign in</span>
                    <span className="sr-only">Sign in</span>
                    <HiUser />
                </button>

	)
}

export default SignInLink