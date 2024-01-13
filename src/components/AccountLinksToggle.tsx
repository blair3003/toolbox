import { CiUser } from 'react-icons/ci'
import { useAuthContext } from '@/context/AuthProvider'

interface AccountLinksToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const AccountLinksToggle = ({ toggle, toggleRef }: AccountLinksToggleProps) => {

	const { authAccount: account } = useAuthContext()
	if (!account) return null

	return (
		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
			onClick={toggle}
			className="h-12 px-2 flex items-center gap-1 text-white text-3xl hover:bg-orange-700 focus:bg-orange-700 rounded-full"
		>
			<span className="hidden lg:inline-block text-sm">{account.name}</span>
			<span className="sr-only">Account Links</span>
			<CiUser />
		</button>
	)
}

export default AccountLinksToggle