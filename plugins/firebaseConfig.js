import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDK_bzg9yRm55ROp0Yyw4hu2Sen30z_CTg',
    authDomain: 'hotel-dfbc1.firebaseapp.com',
    databaseURL: 'https://hotel-dfbc1.firebaseio.com',
    projectId: 'hotel-dfbc1',
    storageBucket: 'hotel-dfbc1.appspot.com',
    messagingSenderId: '51713211931',
    appId: '1:51713211931:web:7a499ca4a19cb56d7dc2be',
    measurementId: 'G-YFQLWXCD3W'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
