import Link from 'next/link'
import { HiArrowRightOnRectangle, HiShoppingCart } from 'react-icons/hi2'
import { useAccountContext } from '@/context/AccountProvider'
import { useThemeContext } from '@/context/ThemeProvider'
import DarkModeToggle from './DarkModeToggle'

interface AccountLinksProps {
	isOpen: boolean
}

const AccountLinks = ({ isOpen }: AccountLinksProps) => {

	const { account } = useAccountContext()
    const { isDarkMode } = useThemeContext()
	
	if (!account) return null

	return (
		<ol className={`absolute z-50 right-0 mt-4 py-2 rounded shadow-2xl border-2 ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-stone-600 border-stone-700' : 'bg-stone-100 border-stone-200'}`}>
			<li>
				<Link
					href={`/cart`}
					className={`block px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
						    <HiShoppingCart />
                        </div>
						<div>
							<span className="block font-bold">{account.name}</span>
							<span className="block">View your cart</span>							
						</div>
					</div>
				</Link>
			</li>
			<li>
				<Link
					href="/logout"
					className={`block w-full px-4 py-2 text-nowrap ${isDarkMode ? 'text-white hover:bg-stone-700 focus:bg-stone-700' : 'text-black hover:bg-stone-200 focus:bg-stone-200'}`}
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
                            <HiArrowRightOnRectangle />
                        </div>						
						<span>Sign out</span>
					</div>
				</Link>
			</li>
			<li>
				<DarkModeToggle/>
			</li>
		</ol>
	)
}

export default AccountLinks