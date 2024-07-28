// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyBwli5GA1_iXN50Y3fgse9jUBzhhAoceOc",
  authDomain: "cafeteria-data.firebaseapp.com",
  projectId: "cafeteria-data",
  storageBucket: "cafeteria-data.appspot.com",
  messagingSenderId: "911463737600",
  appId: "1:911463737600:web:db7aad85fe5b7d8962ebe5"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}