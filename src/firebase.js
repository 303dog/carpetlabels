import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBeiZjCu3xQ-WIYHO2mE0RgJWO7uhh479Y",
  authDomain: "irononcarpetlabels.firebaseapp.com",
  projectId: "irononcarpetlabels",
  storageBucket: "irononcarpetlabels.appspot.com",
  messagingSenderId: "780224634683",
  appId: "1:780224634683:web:01fadb15675ff8428b211e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };