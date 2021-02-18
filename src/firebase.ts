import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import  firestore from 'firebase/firestore'


const app = {
    apiKey: "AIzaSyAf9FDSU6oB1jlyCJHR-1Fbx2elX8-u1hU",
    authDomain: "fir-test-b1e99.firebaseapp.com",
    databaseURL: "https://fir-test-b1e99-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-test-b1e99",
    storageBucket: "fir-test-b1e99.appspot.com",
    messagingSenderId: "455861716400",
    appId: "1:455861716400:web:07ffbaa269b9cc53b10275"
  };
  firebase.initializeApp(app);

  const auth = firebase.auth();

  const db = { candidates: firestore().collection('candidates') }
  export default { auth, db };