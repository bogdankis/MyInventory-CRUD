import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAK7-TYUaT7mFLzXEIYm1SZRpJM_H0ercE",
    authDomain: "myinventory-server.firebaseapp.com",
    projectId: "myinventory-server",
    storageBucket: "myinventory-server.appspot.com",
    messagingSenderId: "516417782193",
    appId: "1:516417782193:web:dc43fa890f281ac91bfd90",
    measurementId: "G-GH6JFT7L3P"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();