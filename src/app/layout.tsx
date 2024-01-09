import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const roboto = Roboto({ weight: ['300', '400'], subsets: ['latin'] })

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
				<Header />
				{children}
			</body>
		</html>
	)
}
