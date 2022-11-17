import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "chatapp-d6b9a",
  storageBucket: "chatapp-d6b9a.appspot.com",
  messagingSenderId: "20864178519",
  appId: process.env.REACT_APP_API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
