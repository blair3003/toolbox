import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/layouts/Header'
import AuthProvider from '@/context/AuthProvider'
import CartProvider from '@/context/CartProvider'
import AccountProvider from '@/context/AccountProvider'

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Toolbox',
	description: 'An e-commerce site for home improvement products',
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<AuthProvider>
					<AccountProvider>
						<CartProvider>
							<Header />
							{children}
						</CartProvider>
					</AccountProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
