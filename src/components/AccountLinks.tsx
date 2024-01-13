import Link from 'next/link'
import { CiLogout, CiUser } from 'react-icons/ci'
import { useAccountContext } from '@/context/AccountProvider'
import { useAuthContext } from '@/context/AuthProvider'

interface AccountLinksProps {
	isOpen: boolean
}

const AccountLinks = ({ isOpen }: AccountLinksProps) => { 

	const { account } = useAccountContext()
	const { setAuthUserToNull } = useAuthContext()
	if (!account) return null

	return (
		<ol className={`absolute right-0 mt-4 py-2 bg-white rounded ${isOpen ? 'block' : 'hidden'}`}>
			<li>
				<Link
					href={`/profile/${account.id}`}
					className="block text-stone-700 hover:bg-stone-200 focus:bg-stone-200 px-4 py-2 text-nowrap"
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
						    <CiUser />
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
					className="block w-full text-stone-700 hover:bg-stone-200 focus:bg-stone-200 px-4 py-2 text-nowrap"
				>
					<div className="flex items-center gap-2">
                        <div className="h-8 w-8 text-2xl grid place-content-center">
                            <CiLogout />
                        </div>						
						<span>Sign out</span>
					</div>
				</button>
			</li>
		</ol>
	)
}

export default AccountLinks