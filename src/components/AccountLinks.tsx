import Link from 'next/link'
import { HiArrowRightOnRectangle, HiUser } from 'react-icons/hi2'
import { useAccountContext } from '@/context/AccountProvider'
import { useAuthContext } from '@/context/AuthProvider'
import DarkModeToggle from './DarkModeToggle'
import { useThemeContext } from '@/context/ThemeProvider'

interface AccountLinksProps {
	isOpen: boolean
}

const AccountLinks = ({ isOpen }: AccountLinksProps) => {

	const { account } = useAccountContext()
	const { setAuthUserToNull } = useAuthContext()
    const { isDarkMode } = useThemeContext()
	
	if (!account) return null

	return (
		<ol className={`absolute z-50 right-0 mt-4 py-2 bg-white rounded ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600' : ''}`}>
			<li>
				<Link
					href={`/profile/${account.id}`}
					className={`block px-4 py-2 text-nowrap text-black hover:bg-stone-200 focus:bg-stone-200 ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : ''}`}
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
						    <HiUser />
                        </div>
						<div>
							<span className="block font-bold">{account.name}</span>
							<span className="block">View your profile</span>							
						</div>
					</div>
				</Link>
			</li>
			<li>
				{/* <Link
					href="/logout"
					className="block text-stone-700 hover:bg-stone-200 focus:bg-stone-200 px-4 py-2 text-nowrap"
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
                            <CiLogout />
                        </div>						
						<span>Sign out</span>
					</div>
				</Link> */}
				<button
					onClick={setAuthUserToNull}
					className={`block w-full px-4 py-2 text-nowrap text-black hover:bg-stone-200 focus:bg-stone-200 ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : ''}`}
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
                            <HiArrowRightOnRectangle />
                        </div>						
						<span>Sign out</span>
					</div>
				</button>

			</li>
			<li>
				<DarkModeToggle/>
			</li>
		</ol>
	)
}

export default AccountLinks