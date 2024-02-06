import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getProductsFromSearchTerm = async (searchTerm: string): Promise<Product[] | undefined> => {

    const searchTermArr = [...new Set(searchTerm.split(' '))]
    if (!searchTermArr.some(searchTerm => searchTerm.length > 2)) return []

    const productsCollectionRef = collection(db, 'products')

    try {
        const products = await getDocs(productsCollectionRef)
        return products.docs
            .filter(product =>
                searchTermArr.some(searchTerm =>
                    product.data().title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.data().description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.data().categories?.some((category: Category) => category.title.toLowerCase().includes(searchTerm.toLowerCase()))
                )
            )
            .map(product => ({ id: product.id, ...product.data() })) as Product[]

    } catch (err) {
        console.error(err)
    }
}

export default getProductsFromSearchTerm