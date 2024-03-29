import { addDoc, collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const getAccount = async (authUser: FirebaseUser): Promise<Account | undefined> => {

    const accountCollectionRef = collection(db, 'accounts')

    try {
        const q = query(accountCollectionRef, where('uid', '==', authUser.uid))
        const querySnapshot = await getDocs(q)
        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]
            return { id: doc.id, ...doc.data() } as Account
        }

        const newAccountRef = await addDoc(accountCollectionRef, { uid: authUser.uid, name: authUser.displayName, favorites: {}, cart: {} })
        const newAccountDoc = await getDoc(newAccountRef)
        if (newAccountDoc.exists()) {
            return { id: newAccountDoc.id, ...newAccountDoc.data() } as Account
        }
        
        throw new Error(`New account error`)
        
    } catch (error) {
        console.error(error)
    }
}