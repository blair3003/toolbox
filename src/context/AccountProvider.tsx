'use client'

import { createContext, useContext } from 'react'
import useAccount from '@/hooks/useAccount'

interface AccountContextType {
    account: Account | null
	setAccountCart: (cart: Cart) => void
}

const AccountContext = createContext({})

export const useAccountContext = () => useContext(AccountContext) as AccountContextType

const AccountProvider = ({ children }: { children: React.ReactNode }) => {

	const account: AccountContextType = useAccount()

	return (
		<AccountContext.Provider value={account}>
			{children}
		</AccountContext.Provider>
	)
}

export default AccountProvider