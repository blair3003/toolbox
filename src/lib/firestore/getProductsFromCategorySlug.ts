import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getProductsFromCategorySlug = async (slug: string): Promise<Product[] | undefined> => {

    // This function could be made more effficient if the Product stored Category slugs
    // This way a query could be used to identify strings within an array and run operation on server side
    // Firestore currently cannot query an array of objects within a document

    const productsCollectionRef = collection(db, 'products')

    try {
        const products = await getDocs(productsCollectionRef)
        return products.docs
            .filter(product => product.data().categories?.some((category: Category) => category.slug === slug))
            .map(product => ({ id: product.id, ...product.data() })) as Product[]

    } catch (err) {
        console.error(err)
    }
}

export default getProductsFromCategorySlug