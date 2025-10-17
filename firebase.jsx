// Import required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your real config values (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCEVZYmD-HXg7h1wxZtkoKo76ZEek-GGmM",
  authDomain: "focusflow-6ad65.firebaseapp.com",
  projectId: "focusflow-6ad65",
  storageBucket: "focusflow-6ad65.firebasestorage.app",
  messagingSenderId: "440869225615",
  appId: "1:440869225615:web:07be34842be7acd80c9cfa",
  measurementId: "G-TS6LQ9SXTL", // optional, only needed for analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services we need
export const auth = getAuth(app);
export const db = getFirestore(app);

// (Optional) Enable analytics only if you really want tracking
// import { getAnalytics } from "firebase/analytics";
// export const analytics = getAnalytics(app);
