import admin from 'firebase-admin';

class DfFirebase {
  db: any;
  initialize() {
    const app = {
      apiKey: "AIzaSyAf9FDSU6oB1jlyCJHR-1Fbx2elX8-u1hU",
      authDomain: "fir-test-b1e99.firebaseapp.com",
      databaseURL: "https://fir-test-b1e99-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "fir-test-b1e99",
      storageBucket: "fir-test-b1e99.appspot.com",
      messagingSenderId: "455861716400",
      appId: "1:455861716400:web:07ffbaa269b9cc53b10275"
  };
    admin.initializeApp(app);
    this.db = admin.firestore();

  }
  async post(data: any) {
    const docRef = this.db.collection('candidates').doc('first_name');
    await docRef.set(data);
  }
}


export default DfFirebase;

