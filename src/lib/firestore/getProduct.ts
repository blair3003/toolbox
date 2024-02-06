import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getProduct = async (id: string): Promise<Product | null | undefined> => {

    const productDocRef = doc(db, 'products', id)

    try {        
        const product = await getDoc(productDocRef)
        if (!product.exists()) return null

        return { id: product.id, ...product.data() } as Product

    } catch (err) {
        console.error(err)
    }
}

export default getProduct