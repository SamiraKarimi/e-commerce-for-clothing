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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;