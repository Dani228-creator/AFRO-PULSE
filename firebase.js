import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "afro-pulse.firebaseapp.com",
  projectId: "afro-pulse",
  storageBucket: "afro-pulse.firebasestorage.app",
  messagingSenderId: "906434113819",
  appId: "1:906434113819:web:f7747576e55420af9363be",
  measurementId: "G-H24SGSR8GL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
