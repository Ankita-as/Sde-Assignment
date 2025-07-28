import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh_BIvF-WqPOBmoSN4RbpY0hkAHK5u68I",
  authDomain: "sde-intern-assignment.firebaseapp.com",
  projectId: "sde-intern-assignment",
  storageBucket: "sde-intern-assignment.appspot.com",
  messagingSenderId: "409334721363",
  appId: "1:409334721363:web:ca26c2b0d834726d7f0fa6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth,
      provider,
      db
    }
  }
});
