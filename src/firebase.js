import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAke4xx3LntRU2u5OxqgsjNiRtNyt8-vLk",
  authDomain: "line-clone-tutorial-sample4.firebaseapp.com",
  projectId: "line-clone-tutorial-sample4",
  storageBucket: "line-clone-tutorial-sample4.appspot.com",
  messagingSenderId: "427056597150",
  appId: "1:427056597150:web:10bbb72f2539f9f012d38f"
});


const db = firebaseApp.firestore();

const auth = firebase.auth();


export {db , auth};