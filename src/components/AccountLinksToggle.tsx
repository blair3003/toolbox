import { CiUser } from 'react-icons/ci'
import { useAccountContext } from '@/context/AccountProvider'

interface AccountLinksToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const AccountLinksToggle = ({ toggle, toggleRef }: AccountLinksToggleProps) => {

	const { account } = useAccountContext()

	return (
		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
			onClick={toggle}
			className="h-8 lg:h-12 min-w-8 lg:px-4 flex items-center justify-around gap-1 text-2xl text-white hover:text-black focus:text-black hover:bg-white focus:bg-white rounded-full"
		>
			<span className="hidden lg:inline-block text-sm">{account?.name}</span>
			<span className="sr-only">Account Links</span>
			<CiUser />
		</button>
	)
}

export default AccountLinksToggle