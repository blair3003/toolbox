import { collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

const updateAccount = async (account: Account) => {

	const accountCollectionRef = collection(db, 'accounts')

	try {
		const accountDocRef = doc(accountCollectionRef, account.id)
		await updateDoc(accountDocRef, { ...account })
		
	} catch (error) {
		console.error(error)
	}
}

export default updateAccount