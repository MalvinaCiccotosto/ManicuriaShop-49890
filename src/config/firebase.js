import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCL_ru2rMuMJ25IVi94h-Vq0RLGwEElers",
    authDomain: "manicuriashop-49890.firebaseapp.com",
    projectId: "manicuriashop-49890",
    storageBucket: "manicuriashop-49890.appspot.com",
    messagingSenderId: "208425802202",
    appId: "1:208425802202:web:3f3af9765dd83bec8908e3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);