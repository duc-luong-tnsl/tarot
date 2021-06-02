import firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'


const firebaseConfig = {
  apiKey: 'AIzaSyD0S41vnK3_I7LYUHfRhYNhMgzGj1sFPJA',
  authDomain: 'matchmaker-e5313.firebaseapp.com',
  projectId: 'matchmaker-e5313',
  storageBucket: 'matchmaker-e5313.appspot.com',
  messagingSenderId: '623826440075',
  appId: '1:623826440075:web:e3910840c8cf8c8bf8a98e',
  measurementId: 'G-SZQZ63F7SK'
};

firebase.initializeApp(firebaseConfig)

export default firebase
