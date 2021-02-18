import admin from 'firebase-admin';

class App {
  async go() {
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
    const db = admin.firestore();
    const docRef = db.collection('flowers').doc('dafidil');
    await docRef.set({
      flower: 'sunflower',
      location: 'london',
      petalCount: 10
    });

  }
}

export default App;

