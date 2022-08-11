import firebase from "firebase";

const firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyBAQNXyb4j_AEh69TjAHjjNsZkSiYsMN8o",
    authDomain: "diseny-97b91.firebaseapp.com",
    projectId: "diseny-97b91",
    storageBucket: "diseny-97b91.appspot.com",
    messagingSenderId: "190296396247",
    appId: "1:190296396247:web:9ab3ec093feaba725dfb92",
    measurementId: "G-GDGNRRNMG5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
