'use client'

import Link from 'next/link'
import { CiUser } from 'react-icons/ci'

const SignInLink = () => {

	return (
		<Link
            href="/login"
            className="h-12 px-2 flex items-center gap-1 text-white text-3xl hover:bg-orange-700 focus:bg-orange-700 rounded-full"
        >
            <span className="hidden lg:inline-block text-sm">Sign in</span>
            <span className="sr-only">Sign in</span>
            <CiUser />

        </Link>
	)
}

export default SignInLink