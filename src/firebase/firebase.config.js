// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVOToXuZuaVTliKwkopWXGxXBkLeGmzNA',
  authDomain: 'smartpractice-d7f1a.firebaseapp.com',
  databaseURL: 'https://smartpractice-d7f1a-default-rtdb.firebaseio.com',
  projectId: 'smartpractice-d7f1a',
  storageBucket: 'smartpractice-d7f1a.appspot.com',
  messagingSenderId: '778523502898',
  appId: '1:778523502898:web:351b668a852b7472e28f2b',
  measurementId: 'G-X1QYJNJZXY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

//Initialize database
export const db = getDatabase(app);
