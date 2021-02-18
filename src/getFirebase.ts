import { app, credential } from "firebase-admin";
import { firestore } from "firebase-admin";
import * as admin from 'firebase-admin';


admin.initializeApp({credential: admin.credential.applicationDefault(),
  databaseURL: "https://https://fir-test-b1e99.firebaseio.com"
  });

  
const firebaseRef = firestore().collection('candidates').doc()

async function getData(){
  const doc = await firebaseRef.get()
  if (!doc.exists) {
    console.log('No data!');
  } else {
    console.log('Data:', doc.data());
  }
}

getData()





