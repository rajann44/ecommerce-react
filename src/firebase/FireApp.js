import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvdl8ZzE_dJh32lItSBE0XuvPnYveMQyc",
  authDomain: "ecommerce01-827fe.firebaseapp.com",
  projectId: "ecommerce01-827fe",
  storageBucket: "ecommerce01-827fe.appspot.com",
  messagingSenderId: "836425506916",
  appId: "1:836425506916:web:d6d0d294aa8d1d48c6bf71",
};

const app = initializeApp(firebaseConfig);

//Exporting for usage across project
export const db = getFirestore(app);
export const usersReference = collection(db, "users");
export const productsReference = collection(db, "products");
export const ordersReference = collection(db, "orders");
export const auth = getAuth(app);
export default app;
