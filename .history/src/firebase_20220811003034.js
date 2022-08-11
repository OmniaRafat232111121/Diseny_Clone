import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSZLhTGZ-n5-lZ3AhZh9sP7cA6XMsI3ho",
  authDomain: "disney-clone-9a9c7.firebaseapp.com",
  projectId: "disney-clone-9a9c7",
  storageBucket: "disney-clone-9a9c7.appspot.com",
  messagingSenderId: "572130368744",
  appId: "1:572130368744:web:ba3a6b6bee3e1cf9cf3d5d",
  measurementId: "G-Y6NWRFRCDJ"
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
