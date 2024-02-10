import { Metadata } from 'next'
import SignInPage from '@/components/SignInPage'

export const metadata: Metadata = {
	title: 'Sign In'
}

export default function Login() {

    return <SignInPage />
}