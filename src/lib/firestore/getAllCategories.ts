import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'

const getAllCategories = async (): Promise<Category[] | undefined> => {

	const categoriesCollectionRef = collection(db, 'categories')

	try {
		const categoryDocs = await getDocs(categoriesCollectionRef)
		return categoryDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Category[]

	} catch (error) {
		console.error(error)
	}
}

export default getAllCategories