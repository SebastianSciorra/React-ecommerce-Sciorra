
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdSgemgnsPyqHYZyQ0ja4LtEDdP_8uA9o",
  authDomain: "ecommercesebasc.firebaseapp.com",
  projectId: "ecommercesebasc",
  storageBucket: "ecommercesebasc.appspot.com",
  messagingSenderId: "522809994915",
  appId: "1:522809994915:web:83bc0e12b95976b04c5916"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);