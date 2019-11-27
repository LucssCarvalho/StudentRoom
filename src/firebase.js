import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5gbUbS1_dX5wd-XUS3mvLFYBHHZ3IqpU",
    authDomain: "tcunip-cc.firebaseapp.com",
    databaseURL: "https://tcunip-cc.firebaseio.com",
    projectId: "tcunip-cc",
    storageBucket: "tcunip-cc.appspot.com",
    messagingSenderId: "85379620348",
    appId: "1:85379620348:web:49721ec97a896468da6679",
    measurementId: "G-J97696PWZ8"
};

firebase.initializeApp(firebaseConfig)

export default firebase