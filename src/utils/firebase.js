import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxeTLF3A-ApV5f13ysSR4p7-ZMicB24C8",
  authDomain: "react-chats-36c73.firebaseapp.com",
  projectId: "react-chats-36c73",
  storageBucket: "react-chats-36c73.appspot.com",
  messagingSenderId: "159408038198",
  appId: "1:159408038198:web:2fc4e8128580170f9d9397",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, storage, timestamp };
