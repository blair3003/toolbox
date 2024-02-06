import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getAllProducts = async (): Promise<Product[] | undefined> => {

	const productsCollectionRef = collection(db, 'products')

    try {
        const products = await getDocs(productsCollectionRef)
		return products.docs.map(product => ({ id: product.id, ...product.data() })) as Product[]

    } catch (err) {
        console.error(err)
    }
}

export default getAllProducts