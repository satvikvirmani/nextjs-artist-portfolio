import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCoMQYWhg0GrfD8OG49QwxQOOMorYGMvS4",
  authDomain: "artist-portfolio-9d6b8.firebaseapp.com",
  projectId: "artist-portfolio-9d6b8",
  storageBucket: "artist-portfolio-9d6b8.appspot.com",
  messagingSenderId: "281662124647",
  appId: "1:281662124647:web:b7e0912ca7f95aebcc1ac2",
  measurementId: "G-5G7QPCK9E6",
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
