import { HiUser } from 'react-icons/hi2'
import { useAccountContext } from '@/context/AccountProvider'
import { useThemeContext } from '@/context/ThemeProvider'

interface AccountLinksToggleProps {
	toggle: () => void
	toggleRef: React.MutableRefObject<HTMLElement | null>
}

const AccountLinksToggle = ({ toggle, toggleRef }: AccountLinksToggleProps) => {

	const { account } = useAccountContext()
    const { isDarkMode } = useThemeContext()

	return (
		<button
			ref={toggleRef as React.MutableRefObject<HTMLButtonElement>}
			onClick={toggle}
			className={`h-8 lg:h-12 min-w-8 lg:px-4 flex items-center justify-around gap-1 text-2xl font-bold rounded-full ${isDarkMode ? 'hover:text-white focus:text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-white hover:text-black focus:text-black hover:bg-white focus:bg-white'}`}
		>
			<span className="hidden lg:inline-block text-sm whitespace-nowrap">{account?.name}</span>
			<span className="sr-only">Account Links</span>
			<HiUser />
		</button>
	)
}

export default AccountLinksToggle