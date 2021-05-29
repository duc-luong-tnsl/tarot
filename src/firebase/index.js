import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

// Import environment variable
import {
  FIREBASE__API_KEY, 
  FIREBASE__AUTH_DOMAIN,
  FIREBASE__PROJECT_ID,
  FIREBASE__STORAGE_BUCKET,
  FIREBASE__MESSAGE_SENDER_ID,
  FIREBASE__APP_ID,
  FIREBASE__MESUREMENT_ID

} from "@env"

// Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE__API_KEY,
  authDomain: FIREBASE__AUTH_DOMAIN,
  projectId: FIREBASE__PROJECT_ID,
  storageBucket: FIREBASE__STORAGE_BUCKET,
  messagingSenderId: FIREBASE__MESSAGE_SENDER_ID,
  appId: FIREBASE__APP_ID,
  measurementId: FIREBASE__MESUREMENT_ID
};

firebase.initializeApp(firebaseConfig)

export default firebase
