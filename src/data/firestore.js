import { initializeApp } from "firebase/app";
import { collection, getDoc, getDocs, getFirestore, query, doc, where } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBU1n7DdNvRb7QhIAw2Y7KTL8S9G8IuJeE",
  authDomain: "juniors-boxing.firebaseapp.com",
  projectId: "juniors-boxing",
  storageBucket: "juniors-boxing.firebasestorage.app",
  messagingSenderId: "200302772555",
  appId: "1:200302772555:web:02707186872c78de86a8ce",
  measurementId: "G-955KCNCE0Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
 
export async function getData() {
  const collectionRef = collection(db, "products")
  const productsSnapshot = await getDocs(collectionRef)
  const docs = productsSnapshot.docs
  const dataDocs = docs.map( item => {
    return ( { ...item.data(), id: item.id} )
  })

  return dataDocs;

}

export async function getItemData(itemID) {
  const documentRef = doc(db, "products", itemID)
  const docSnapshot = await getDoc(documentRef)
  if (!docSnapshot.exists()) return undefined
  const docData = docSnapshot.data()
  const docDataWithID  = { ...docData, id: docSnapshot.id }
  return docDataWithID

}

export async function getCategoryData(categoryID) {
  const collectionRef = collection(db,"products")
  const q = query(collectionRef, where("category","==", categoryID))
  const productsSnapshot = await getDocs(q)

  const docs = productsSnapshot.docs;
  const dataDocs = docs.map( item => {
    return ( { ...item.data(), id: item.id} )
  })

  return dataDocs
}

import { addDoc } from 'firebase/firestore';

export async function createBuyOrder(orderData) {
  const ordersRef = collection(db, 'orders');
  const docRef = await addDoc(ordersRef, orderData);
  return docRef.id;
}
