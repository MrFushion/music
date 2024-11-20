import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCPJfjWXETfKlUD4A5BuAjDaJlpGHOc0Ek',
  authDomain: 'music-97487.firebaseapp.com',
  projectId: 'music-97487',
  storageBucket: 'music-97487.firebasestorage.app',
  appId: '1:900124028886:web:b19a6216569e9db5387e77',
}
export default firebase.initializeApp(firebaseConfig)
