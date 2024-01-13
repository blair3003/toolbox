'use client'

import useMenu from '@/hooks/useMenu'
import { useAccountContext } from '@/context/AccountProvider'
import AccountLinksToggle from './AccountLinksToggle'
import AccountLinks from './AccountLinks'
import SignInLink from './SignInLink'

const AccountNav = () => {

	const { isOpen, toggle, ref } = useMenu()
    const { account } = useAccountContext()

	return (
		<nav className="relative">
			{account ? <AccountLinksToggle toggle={toggle} toggleRef={ref} /> : <SignInLink />}
			<AccountLinks isOpen={isOpen} />
		</nav>
	)
}

export default AccountNav