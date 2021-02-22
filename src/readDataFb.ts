import DfFirebase from "./firebase";

export default async function getFbData(this: any) {
  const dfFirebase = new DfFirebase();
  dfFirebase.initialize();

  const dataRef = dfFirebase.db.collection("candidates").doc('first_name');
  const snapshot = await dataRef.get();
  if (!snapshot.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', snapshot.data());
  }}


  getFbData()