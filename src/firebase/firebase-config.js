
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCPIM4mbW_chOgTwqU0K026GRHxA6mWSwY",
  authDomain: "biblioteca-be01c.firebaseapp.com",
  projectId: "biblioteca-be01c",
  storageBucket: "biblioteca-be01c.appspot.com",
  messagingSenderId: "1042604844956",
  appId: "1:1042604844956:web:e960316e415ea384c20a59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


