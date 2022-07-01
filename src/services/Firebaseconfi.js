
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyBBk60Zhfe1M70OZi1f0oCgNjWL7Ir-waM",
  authDomain: "crud-pavas.firebaseapp.com",
  projectId: "crud-pavas",
  storageBucket: "crud-pavas.appspot.com",
  messagingSenderId: "1039030413317",
  appId: "1:1039030413317:web:874a51d9f43364ffd6146c"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export{
    app,
    db
}