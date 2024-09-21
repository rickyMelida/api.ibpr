import  { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../../../firebase.json';
import { getStorage } from "firebase/storage";
//const { firebaseConfig } = require("/etc/secrets/firebase.json");


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);