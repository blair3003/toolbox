import type { Metadata } from 'next'
import { roboto } from '@/fonts/roboto'
import './globals.css'
import Header from '@/layouts/Header'
import Main from '@/layouts/Main'
import Footer from '@/layouts/Footer'
import AuthProvider from '@/context/AuthProvider'
import CartProvider from '@/context/CartProvider'
import AccountProvider from '@/context/AccountProvider'
import ThemeProvider from '@/context/ThemeProvider'

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
				<ThemeProvider>
				<AuthProvider>
				<AccountProvider>
				<CartProvider>
					<Header />
					<Main>
						{children}
					</Main>
					<Footer />
				</CartProvider>
				</AccountProvider>
				</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
