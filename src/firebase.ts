import admin from 'firebase-admin';

class DfFirebase {
  db: any;
  initialize() {
    const app = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
  };
    admin.initializeApp(app);
    this.db = admin.firestore();

  }
  async post(data: any) {
    const docRef = this.db.collection('candidates').doc('first_name');
    await docRef.set(data);
  }

  async get(data: any) {
    const getdoc = this.db.collection('candidates').doc('first_name');
    await getdoc.get(data);
      }
}



export default DfFirebase;

