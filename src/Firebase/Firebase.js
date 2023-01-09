import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDo7MIh994CBYwi-8N_FznnjINGzx7CODo",
  authDomain: "emyay-network.firebaseapp.com",
  projectId: "emyay-network",
  storageBucket: "emyay-network.appspot.com",
  messagingSenderId: "721127657769",
  appId: "1:721127657769:web:b57d4aaa545bcfec612738",
  measurementId: "G-S4MYWQPXSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export const GoogleProvider = new GoogleAuthProvider()
export { auth, db };