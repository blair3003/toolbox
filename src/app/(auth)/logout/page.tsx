import { Metadata } from 'next'
import SignOutPage from '@/components/SignOutPage'

export const metadata: Metadata = {
	title: 'Sign Out'
}

export default function Logout() {

    return <SignOutPage />
}