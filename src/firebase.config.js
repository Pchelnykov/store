import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDI3SUjyqc74nc17TmRrbaFrCke-ihjpSQ",
  authDomain: "my-store-b58a7.firebaseapp.com",
  projectId: "my-store-b58a7",
  storageBucket: "my-store-b58a7.appspot.com",
  messagingSenderId: "1080614311539",
  appId: "1:1080614311539:web:3256fb007c22bf596dfc06",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
