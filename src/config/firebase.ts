import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUOd4Pu1Dw7u7SWGf_Y_1Yoga3ctRY4Eo",
    authDomain: "toolbox-96a96.firebaseapp.com",
    projectId: "toolbox-96a96",
    storageBucket: "toolbox-96a96.appspot.com",
    messagingSenderId: "205307575387",
    appId: "1:205307575387:web:110e11f81e677dfaa9537e"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)