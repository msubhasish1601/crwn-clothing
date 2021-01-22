import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQdIMHzG0KGr3OBAf0-pKmhEG2SvmUrlI",
    authDomain: "crwn-db-16dc7.firebaseapp.com",
    projectId: "crwn-db-16dc7",
    storageBucket: "crwn-db-16dc7.appspot.com",
    messagingSenderId: "848562833515",
    appId: "1:848562833515:web:235f9be40dab53e60fc92e",
    measurementId: "G-5BSRHSP4BG"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const {displayName , email} =userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error){
      console.log('error creating user', error.message);

    }
  }

  return userRef;
}

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;