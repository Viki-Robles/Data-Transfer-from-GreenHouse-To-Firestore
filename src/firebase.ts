import firebase from "firebase";
import { firestore } from "firebase-admin";
import * as admin from 'firebase-admin';

const app = {
    apiKey: "AIzaSyAf9FDSU6oB1jlyCJHR-1Fbx2elX8-u1hU",
    authDomain: "fir-test-b1e99.firebaseapp.com",
    databaseURL: "https://https://fir-test-b1e99.firebaseio.com",
    projectId: "fir-test-b1e99",
    storageBucket: "fir-test-b1e99.appspot.com",
    messagingSenderId: "455861716400",
    appId: "1:455861716400:web:07ffbaa269b9cc53b10275"
  };
  firebase.initializeApp(app);

  const ad = admin.initializeApp({credential: admin.credential.applicationDefault(),
    databaseURL: "https://https://fir-test-b1e99.firebaseio.com"
    });

  const auth = firebase.auth();

  const db = { candidates: firestore().collection('candidates') }
  console.log(db)
  export default { db, auth, ad };
