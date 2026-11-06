import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCKBnR6J-uuET0uWZr2F147_PX3-3lGbeI",
  authDomain: "otavios-barbearia.firebaseapp.com",
  projectId: "otavios-barbearia",
  storageBucket: "otavios-barbearia.firebasestorage.app",
  messagingSenderId: "1058681130667",
  appId: "1:1058681130667:web:b8e4020f67bf65011a71ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);