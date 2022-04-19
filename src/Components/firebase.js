// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCoVZMRUj11rFuD41fIDFZhsJ5CAm3BFjM",
  authDomain: "crud-empleados-reactjs.firebaseapp.com",
  projectId: "crud-empleados-reactjs",
  storageBucket: "crud-empleados-reactjs.appspot.com",
  messagingSenderId: "1039886881828",
  appId: "1:1039886881828:web:57bdd47ada1b9cdb9874b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}