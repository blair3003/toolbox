import { Metadata } from 'next'
import CheckoutPage from '@/components/CheckoutPage'

export const metadata: Metadata = {
	title: 'Checkout'
}

export default function Checkout() {

	return <CheckoutPage />
}