'use client'

import useMenu from '@/hooks/useMenu'
import { useAuthContext } from '@/context/AuthProvider'
import AccountLinksToggle from './AccountLinksToggle'
import AccountLinks from './AccountLinks'
import SignInLink from './SignInLink'

const AccountNav = () => {

	const { isOpen, toggle, ref } = useMenu()
    const { authUser } = useAuthContext()

	return (
		<nav className="relative">
			{authUser ? <AccountLinksToggle toggle={toggle} toggleRef={ref} /> : <SignInLink />}
			<AccountLinks isOpen={isOpen} />
		</nav>
	)
}

export default AccountNav