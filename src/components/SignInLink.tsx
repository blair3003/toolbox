'use client'

import { useAuthContext } from '@/context/AuthProvider'
import Link from 'next/link'
import { CiUser } from 'react-icons/ci'

const SignInLink = () => {

    const { setAuthUserToTest } = useAuthContext()

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
					className="h-12 px-2 flex items-center gap-1 text-3xl text-white hover:text-black focus:text-black hover:bg-white focus:bg-white rounded-full"
				>
					<span className="hidden lg:inline-block text-sm">Sign in</span>
                    <span className="sr-only">Sign in</span>
                    <CiUser />
                </button>

	)
}

export default SignInLink