import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDWzsixu0mqTB48OQcsSgWSnTzwdrkC7H0",
  authDomain: "e-commerce-app-b0868.firebaseapp.com",
  projectId: "e-commerce-app-b0868",
  storageBucket: "e-commerce-app-b0868.appspot.com",
  messagingSenderId: "847299620069",
  appId: "1:847299620069:web:5dd8c4dc1e497a7987780c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export const GoogleProvider = new GoogleAuthProvider()
export { auth, db, storage };