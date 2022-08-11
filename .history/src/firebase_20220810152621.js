import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-XRRVDtmAs4dVBGV_Wp5lTnqxHXIfG9I",

  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
