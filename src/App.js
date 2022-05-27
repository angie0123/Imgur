import { initializeApp } from 'firebase/app';
import { getFirestore, doc, collection, addDoc } from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyC9IYgw2O6Uyj_B_beQCloRf8NgZmc0hss',
  authDomain: 'imgur-75071.firebaseapp.com',
  projectId: 'imgur-75071',
  storageBucket: 'imgur-75071.appspot.com',
  messagingSenderId: '985443297553',
  appId: '1:985443297553:web:17c350e2c15f014cb984b0',
};

initializeApp(firebaseConfig);

const createPost = async () => {
  const db = getFirestore();
  const docRef = await addDoc(collection(db, 'posts'), {
    title: 'Testing Title',
    description: 'Testing Description',
  });
  console.log('Written document with ID', docRef.id);
};

createPost();

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const signIn = async () => {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  const signOutUser = () => {
    signOut(getAuth());
  };

  const authStateObserver = (user) => {
    setIsUserSignedIn(user ? true : false);
  };
  const initFirebaseAuth = () => {
    onAuthStateChanged(getAuth(), authStateObserver);
  };
  initFirebaseAuth();

  return (
    <>
      <div>Create post</div>
      {isUserSignedIn ? (
        <div className="sign-out" onClick={signOutUser}>
          Sign Out
        </div>
      ) : (
        <div className="sign-in" onClick={signIn}>
          Sign In
        </div>
      )}
    </>
  );
}

export default App;
