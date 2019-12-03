import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBNasaDFNkTj1lAJ9DKeUR0NG6tJoViaZs",
        authDomain: "crwn-db-56843.firebaseapp.com",
        databaseURL: "https://crwn-db-56843.firebaseio.com",
        projectId: "crwn-db-56843",
        storageBucket: "crwn-db-56843.appspot.com",
        messagingSenderId: "194196714625",
        appId: "1:194196714625:web:101066437f24498c748980",
        measurementId: "G-E5NRX90D1H"
      
};  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;