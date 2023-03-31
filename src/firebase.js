import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKomhSLcJ-HSwPjWuS4eV-ogANiokT9W4",
  authDomain: "clone-7fd86.firebaseapp.com",
  projectId: "clone-7fd86",
  storageBucket: "clone-7fd86.appspot.com",
  messagingSenderId: "1073358413241",
  appId: "1:1073358413241:web:dbe89aef0fef55aefaaa68",
  measurementId: "G-82PMPV8CZK"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };