import firebase from 'firebase';
import * as functions from 'firebase-functions'
import "firebase/firestore";
import db from './firebase';



const firebaseUrl = 'http://fir-test-b1e99.firebaseio.com'

// const firebaseRef = firestore().collection('candidates').get()
// 1. Make the API call to firestore with get method
// 2. Firebase get function call

const firebaseRef = db.collection('candidates')

async function getData(){
  const doc = await firebaseRef.get();
  if (!doc.exists) {
    console.log('No data!');
  } else {
    console.log('Data:', doc.data());
  }
}

getData()






