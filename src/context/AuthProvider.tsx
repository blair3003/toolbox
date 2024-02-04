'use client'

import { createContext, useContext } from 'react'
import useAuth from '@/hooks/useAuth'

interface AuthContextType {
    authUser: FirebaseUser | null
    pending: boolean
}

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext) as AuthContextType

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

	const auth: AuthContextType = useAuth()

	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider