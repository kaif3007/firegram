import firebase from 'firebase/app'
import 'firebase/storage' 
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAx14LlZ3xVyzVJAicinZfs80Wu2fQCTzQ",
    authDomain: "firegram-84c42.firebaseapp.com",
    projectId: "firegram-84c42",
    storageBucket: "firegram-84c42.appspot.com",
    messagingSenderId: "102073400025",
    appId: "1:102073400025:web:0f4643271760b24b13dcc8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage()
  const projectFirestore=firebase.firestore()
  const timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage,projectFirestore,timestamp}