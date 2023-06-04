import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyBK6TPilDDXX2zYKemqvNAjhz0V9ix66Mg",
  authDomain: "ch-9-7c068.firebaseapp.com",
  projectId: "ch-9-7c068",
  storageBucket: "ch-9-7c068.appspot.com",
  messagingSenderId: "315272299792",
  appId: "1:315272299792:web:10c56b538944e7cf69d195",
  measurementId: "G-JJR3T7QSML"
})

export const storage = getStorage(app);