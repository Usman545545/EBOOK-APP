
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOJb_hc1CpHndWNsEk3I8VCdeeosym-KQ",
  authDomain: "bookapp-bc433.firebaseapp.com",
  projectId: "bookapp-bc433",
  storageBucket: "bookapp-bc433.appspot.com",
  messagingSenderId: "557589093087",
  appId: "1:557589093087:web:7b0cd0cc03362192da676a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};