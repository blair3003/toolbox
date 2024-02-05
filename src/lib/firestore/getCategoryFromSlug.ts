import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getCategoryFromSlug = async (slug: string): Promise<Category | null | undefined> => {

    const categoriesCollectionRef = collection(db, 'categories')

    try {

        const q = query(categoriesCollectionRef, where('slug', '==', slug))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]
            return { id: doc.id, ...doc.data() } as Category
        }
        
        return null

    } catch (err) {
        console.error(err)
    }
}

export default getCategoryFromSlug