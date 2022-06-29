import { initializeApp } from "firebase/app";
import "./styles.css";
import {
  getFirestore,
  collection,
  addDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./component/Home";
import NewPost from "./component/NewPost";
import UserLayout from "./component/UserLayout";
import Register from "./component/Register";
import LayoutWithNav from "./component/LayoutWithNav";
import UserComments from "./component/UserComments";
import UserFavourites from "./component/UserFavourites";
import UserPosts from "./component/UserPosts";
import EditPost from "./component/EditPost";
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initFirebaseAuth = () => {
      onAuthStateChanged(getAuth(), authStateObserver);
    };
    // associate user info with auth user
    const authStateObserver = async (user) => {
      if (user) {
        const userdata = await fetchUserData(user.email);
        if (userdata) {
          setUser(userdata);
        } else {
          navigate("/register");
        }
      } else {
        setUser(null);
      }
    };

    const firebaseConfig = {
      apiKey: "AIzaSyDy9hiNU6LsT1aSiavUnJ1S_L-OZB4-5JY",
      authDomain: "imgur-3d855.firebaseapp.com",
      projectId: "imgur-3d855",
      storageBucket: "imgur-3d855.appspot.com",
      messagingSenderId: "906974734656",
      appId: "1:906974734656:web:49df2c0734fd79218872a5",
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
    navigate("/");
  };
  const fetchUserData = async (email) => {
    const q = query(
      collection(getFirestore(), "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);
    let data;
    querySnapshot.forEach((doc) => {
      data = doc.data();
    });
    return data;
  };

  const registerSubmitHandler = async (event, userNameInput) => {
    event.preventDefault();
    const newUser = {
      name: userNameInput,
      email: getAuth().currentUser.email,
      profilePic: getAuth().currentUser.photoURL,
    };
    await addDoc(collection(getFirestore(), "users"), newUser);
    navigate("/");
    const userdata = await fetchUserData(getAuth().currentUser.email);
    setUser(userdata);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNav
              user={user}
              signOutHandler={signOutUser}
              signInHandler={signIn}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/user/:name" element={<UserLayout />}>
            <Route path="" element={<UserPosts />} />
            <Route path="posts" element={<UserPosts />} />
            <Route path="favourites" element={<UserFavourites />} />
            <Route path="comments" element={<UserComments />} />
          </Route>
        </Route>
        <Route
          path="/upload"
          element={<NewPost user={user} signInHandler={signIn} />}
        />
        <Route path="upload/:id" element={<EditPost />} />
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
