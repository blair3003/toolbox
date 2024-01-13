'use client'

import { createContext, useContext } from 'react'
import useAuth from '@/hooks/useAuth'

// interface AuthContextType {
//     authUser: FirebaseUser | null
//     pending: boolean
// }

interface AuthContextType {
    authUser: { uid: string, name: string } | null
	authAccount: Account | null
    pending: boolean
}

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext) as AuthContextType

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

	const { authUser, authAccount, pending } = useAuth()

	const value: AuthContextType = {
        authUser,
		authAccount,
        pending
    }

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider