
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    orderBy,
    addDoc,
    Firestore,
    writeBatch,
} from "firebase/firestore";
import { getProduct } from "./eeeee";

const firebaseConfig = {
    apiKey: "AIzaSyBtyw5STuZq9ZeIh9CO2ULgGlmbn9RK12g",
    authDomain: "coder-house-react-7413b.firebaseapp.com",
    projectId: "coder-house-react-7413b",
    storageBucket: "coder-house-react-7413b.appspot.com",
    messagingSenderId: "104205566960",
    appId: "1:104205566960:web:b6e36b46486433965f9335"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function obtenerProductos() {

    const productsRef = collection(db, "productos");
    const snapshot = await getDocs(productsRef)

    const products = snapshot.docs.map((elem) => {
        let product = elem.data();
        product.id = elem.id;
        return product;
    });

    return products;

}


export async function getProduct(idUrl) {
    const productsRef = collection(db, "productos");
    const docRef = doc(productsRef, idUrl);
    /* getDoc() */
    const snapshot = await getDoc(docRef);
    return { ...snapshot.data(), id: snapshot.id };
  }
  

export async function getProductByCategory(categoryUrl) {
    const productsRef = collection(db, "productos");

    // Create a query against the collection.
    const q = query(productsRef, where("category", "==", categoryUrl));

    const snapshot = await getDocs(q);

    const products = snapshot.docs.map((elem) => {
        let product = elem.data();
        product.id = elem.id;
        return product;
    });

    return products;
}

export default db;