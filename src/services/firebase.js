
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

        {
            id: 5,
            title: "Teclado Mac",
            category: "Accesorios",
            detail: "Teclado bluetooth Apple Magic QWERTY español",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_898796-MLA52350355193_112022-F.webp", 
            price: "33000",
            stock: 8,
        },

        {
            id: 6,
            title: "Apple Magic Mouse 2",
            category: "Accesorios",
            detail: "Apple Magic Mouse 2 Plateado bluetooh",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_856166-MLA46403910103_062021-F.webp", 
            price: "30000",
            stock: 12,
        },

        {
            id: 7,
            title: "Apple iPhone 11 ",
            category: "Celulares",
            detail: "color black de 64 GB",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_656548-MLA46114829749_052021-F.webp", 
            price: "215000",
            stock: 3,
            discount: 30,
        },

        {
            id: 8,
            title: "Samsung Galaxy S23",
            category: "Celulares",
            detail: "color Lavander de 256 GB ",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_638167-MLA53452027441_012023-F.webp", 
            price: "379000",
            stock: 5,
        },

        {
            id: 9,
            title: "Notebook Acer Predator Helios 300",
            category: "Computacion",
            detail: "Core I7 16gb Ram Rtx 3060",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_929659-MLA50139340732_052022-F.webp", 
            price: "790000",
            stock: 3,
        },

        {
            id: 10,
            title: "Notebook Lenovo Idea Pad Flex 5",
            category: "Computacion",
            detail: "I7-1255, 16gb-512ssd",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_947526-MLA53603535473_022023-F.webp", 
            price: "450000",
            discount: 15,
            stock: 1,
        },

        {
            id: 11,
            title: "Teclado gamer bluetooth Keychron K6",
            category: "Accesorios",
            detail: "QWERTY Gateron Red Hot-swappable inglés US color negro con luz blanca",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_711402-MLA46517254176_062021-F.webp", 
            price: "60000",
            stock: 4,
        },

        {
            id: 12,
            title: "MacBook Air M2 2022 starlight 13.6",
            category: "Computacion",
            detail: "Apple M2 8GB de RAM 256GB SSD, Apple M2 8-Core GPU 2560x1664px macOS",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_798982-MLA51356381076_082022-F.webp", 
            price: "484000",
            stock: 2,
        },

        {
            id: 13,
            title: "Mouse Gamer Mad Catz",
            category: "Accesorios",
            detail: "The Authentic R.a.t. 4+",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_641143-MLA43158368307_082020-F.webp", 
            price: "16830",
            stock: 4,
        },

        {
            id: 14,
            title: "Samsung Galaxy A52 ",
            category: "Celulares",
            detail: "128 GB awesome black 6 GB RAM",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_927874-MLA45401334658_032021-F.webp", 
            price: "60000",
            stock: 4,
        },

        {
            id: 15,
            title: "Notebook Msi Ge76 ",
            category: "Computacion",
            detail: "12uh I7 12 32gb 1tbssd 17.3 Rtx3080 W11pro",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_919704-MLA50247618479_062022-F.webp", 
            price: "1980000",
            stock: 4,
        },

        {
            id: 16,
            title: "Apple iPhone 14 Pro Max",
            category: "Celulares",
            detail: "color deep purple de 256 GB",
            img: "https://http2.mlstatic.com/D_NQ_NP_2X_605126-MLM51559383638_092022-F.webp", 
            price: "659000",
            stock: 3,
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