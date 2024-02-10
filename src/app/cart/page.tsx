import { Metadata } from 'next'
import CartPage from '@/components/CartPage'

export const metadata: Metadata = {
	title: 'Cart'
}

export default function Cart() {

    return <CartPage />
}