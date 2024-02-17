// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDkPTntw26HsPdM5Fnj33JovwGHMyJGPE4",
	authDomain: "companion-89644.firebaseapp.com",
	projectId: "companion-89644",
	storageBucket: "companion-89644.appspot.com",
	messagingSenderId: "279948246544",
	appId: "1:279948246544:web:c1f9847db3ec319eb35495",
	measurementId: "G-TGFSRS0ZJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//in order to get the auth
export const auth = getAuth();
