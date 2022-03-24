import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {seedDatabase} from '../seed'

const config = {
  apiKey: "AIzaSyAqtbM5hu8060OqDYIbRjCdjILABMxDqrA",
  authDomain: "netflix-cloning-aac70.firebaseapp.com",
  projectId: "netflix-cloning-aac70",
  storageBucket: "netflix-cloning-aac70.appspot.com",
  messagingSenderId: "121001060983",
  appId: "1:121001060983:web:34e29894b7f27b50aff472",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };
