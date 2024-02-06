import HomePage from '@/components/HomePage'
import getAllProducts from '@/lib/firestore/getAllProducts'

export default async function Home() {

	const products = await getAllProducts()

	return (
		<main>
			<HomePage products={products} />
		</main>
	)
}
