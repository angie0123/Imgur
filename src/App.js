import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import User from './pages/User';
import Register from './pages/Register';

const firebaseConfig = {
  apiKey: 'AIzaSyC9IYgw2O6Uyj_B_beQCloRf8NgZmc0hss',
  authDomain: 'imgur-75071.firebaseapp.com',
  projectId: 'imgur-75071',
  storageBucket: 'imgur-75071.appspot.com',
  messagingSenderId: '985443297553',
  appId: '1:985443297553:web:17c350e2c15f014cb984b0',
};

initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  const signOutUser = () => {
    signOut(getAuth());
  };

  // associate user info with auth user
  const authStateObserver = async (user) => {
    console.log('state changed');
    if (user) {
      const userdata = await fetchUserData(user.email);
      // setUser(userdata);
    } else {
      setUser(null);
    }
  };

  console.log('re-rendered');

  const fetchUserData = async (email) => {
    const q = query(
      collection(getFirestore(), 'users'),
      where('email', '==', email)
    );
    const querySnapshot = await getDocs(q);
    let data;
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;
  };

  const initFirebaseAuth = () => {
    onAuthStateChanged(getAuth(), authStateObserver);
  };
  initFirebaseAuth();

  const registerSubmitHandler = async (event, userNameInput) => {
    event.preventDefault();
    const newUser = {
      name: userNameInput,
      email: getAuth().currentUser.email,
      profilePic: getAuth().currentUser.photoURL,
    };
    await addDoc(collection(getFirestore(), 'users'), newUser);
    console.log('new user', newUser);
    setUser(newUser);
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to="/upload">Create post</Link>
        {user ? (
          <>
            <div>{user.name}</div>
            <div>{user.photoURL}</div>
            <div className="sign-out" onClick={signOutUser}>
              Sign Out
            </div>
          </>
        ) : (
          <div className="sign-in" onClick={signIn}>
            Sign In
          </div>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<NewPost />} />
        <Route path="/user/:name" element={<User />} />
        <Route
          path="/register"
          element={<Register registerSubmitHandler={registerSubmitHandler} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const createPost = async () => {
//   const db = getFirestore();
//   const docRef = await addDoc(collection(db, 'posts'), {
//     title: 'Testing Title',
//     description: 'Testing Description',
//   });
//   console.log('Written document with ID', docRef.id);
// };
