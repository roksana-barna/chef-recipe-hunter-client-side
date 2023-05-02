// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUjdJedfPmziyx8Z6CYALQtcXh6mdmmjg",
  authDomain: "chef-recipe-hunter-clien-a7147.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-a7147",
  storageBucket: "chef-recipe-hunter-clien-a7147.appspot.com",
  messagingSenderId: "653349645734",
  appId: "1:653349645734:web:c89304415d0e07ce823367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;