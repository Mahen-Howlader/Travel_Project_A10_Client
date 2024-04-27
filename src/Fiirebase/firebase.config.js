// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKIAcveseQdkzIp3gPyZarRGng9WfN9GQ",
  authDomain: "travel-project-af997.firebaseapp.com",
  projectId: "travel-project-af997",
  storageBucket: "travel-project-af997.appspot.com",
  messagingSenderId: "577564857880",
  appId: "1:577564857880:web:e678297e693ff0e7ba156d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;