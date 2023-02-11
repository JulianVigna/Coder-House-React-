
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
    const q = query(productsRef, orderBy("index"))
    const snapshot = await getDocs(q)

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
};



export async function createOrder(order) {
    const orderRef = collection(db, "order");
  
  
    let respuesta = await addDoc(orderRef, order);
    
  
    return respuesta.id;
}

export async function exportArray(){

    const productos = [
        {
            id: 1,
            title: "Ipone 14 pro",
            category: "Celulares",
            detail: "color silver de 128 GB",
            img: "https://larepublica.pe/resizer/3K9Yq2uiUe8lh1_R_xfFcDqkjAM=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/UG5PVIBA5BDX3PXR6TI4QWVG5M.jpg",
            price: "400000",
            stock: 3,
            discount: 20,
        },
    
        {
            id: 2,
            title: "Samsung S22",
            category: "Celulares",
            detail: "color black de 250 GB",
            img: "https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg",
            price: 250000,
            stock: 2,
        },
    
        {
            id: 3,
            title: "MacBook pro 2022",
            category: "Computacion",
            detail: "color silver con disco de 1 tela con 16 GB de RAM",
            img: "https://www.macstation.com.ar/img/productos/2211-2212-2134-8.jpg",
            price: 500000,
            stock: 4,
            discount: 30,
        },
    
        {
            id: 4,
            title: "Logitech H390",
            category: "Accesorios",
            detail: "Auricular con micronofo Logtiech H-390",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_878789-MLA40161268975_122019-F.webp", 
            price: "6000",
            stock: 2,
        },
    ];


    for (let item of productos) {
        item.index = item.id;
        delete item.id;
        addDoc(collection(db, "productos"), item).then((respuesta) =>
          console.log("item creado: ", respuesta.id)
        );
      }
    }


export default db;