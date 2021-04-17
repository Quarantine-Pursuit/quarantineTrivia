import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDB4K81RrzeOr8nY_lzQ4HtjWetHB2n3k0",
    authDomain: "quarantine-pursuit-robort32.firebaseapp.com",
    databaseURL: "https://quarantine-pursuit-robort32-default-rtdb.firebaseio.com",
    projectId: "quarantine-pursuit-robort32",
    storageBucket: "quarantine-pursuit-robort32.appspot.com",
    messagingSenderId: "916068020198",
    appId: "1:916068020198:web:47e1d0e87677ef5014f027"
};

firebase.initializeApp(firebaseConfig);

export default firebase;