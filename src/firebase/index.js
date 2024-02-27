import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyDefm1o7AR5vXmh_hCjo_95hP1TfCZSpYQ',
    authDomain: 'devtech-4d394.firebaseapp.com',
    projectId: 'devtech-4d394',
    storageBucket: "devtech-4d394.appspot.com",
    messagingSenderId: "47580555547",
    appId: "1:47580555547:web:31a536fe7347283d40cbbe",
    measurementId: "G-7JME259PKC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

