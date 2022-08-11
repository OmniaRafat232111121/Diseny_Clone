import firebase from "./firebase"
const firebaseConfig = {
  apiKey: "AIzaSyB-XRRVDtmAs4dVBGV_Wp5lTnqxHXIfG9I",
  authDomain: "outstanding-pen-287612.firebaseapp.com",
  databaseURL: "https://outstanding-pen-287612.firebaseio.com",
  projectId: "outstanding-pen-287612",
  storageBucket: "outstanding-pen-287612.appspot.com",
  messagingSenderId: "505566049718",
  appId: "1:505566049718:web:ec910346e8a4610fdf3d17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;