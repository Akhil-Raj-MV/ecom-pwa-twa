import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
        apiKey: "AIzaSyBaeaZxdKhp_9oGeAzHB3yE8cX7TuH_PCA",
        authDomain: "ecom-f6538.firebaseapp.com",
        databaseURL: "https://ecom-f6538-default-rtdb.firebaseio.com",
        projectId: "ecom-f6538",
        storageBucket: "ecom-f6538.appspot.com",
        messagingSenderId: "197950543117",
        appId: "1:197950543117:web:d99847f107ebabb1e18c44"
  };

  
  const app = firebase.initializeApp(config);

  export const auth = app.auth();
  export const database = app.database();