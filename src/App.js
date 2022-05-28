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
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import User from './pages/User';
import Register from './pages/Register';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initFirebaseAuth = () => {
      onAuthStateChanged(getAuth(), authStateObserver);
    };
    // associate user info with auth user
    const authStateObserver = async (user) => {
      console.log(user);
      if (user) {
        const userdata = await fetchUserData(user.email);
        if (userdata) {
          setUser(userdata);
        } else {
          navigate('/register');
        }
      } else {
        setUser(null);
      }
    };
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
    const firebaseConfig = {
      apiKey: 'AIzaSyC9IYgw2O6Uyj_B_beQCloRf8NgZmc0hss',
      authDomain: 'imgur-75071.firebaseapp.com',
      projectId: 'imgur-75071',
      storageBucket: 'imgur-75071.appspot.com',
      messagingSenderId: '985443297553',
      appId: '1:985443297553:web:17c350e2c15f014cb984b0',
    };
    initializeApp(firebaseConfig);
    initFirebaseAuth();
  }, [navigate]);

  const signIn = async () => {
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  };

  const signOutUser = () => {
    signOut(getAuth());
  };

  const registerSubmitHandler = async (event, userNameInput) => {
    event.preventDefault();
    const newUser = {
      name: userNameInput,
      email: getAuth().currentUser.email,
      profilePic: getAuth().currentUser.photoURL,
    };
    await addDoc(collection(getFirestore(), 'users'), newUser);
    console.log('new user', newUser);
  };

  return (
    <>
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
    </>
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
