import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import {
  query,
  collection,
  getFirestore,
  where,
  getDocs,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
const UserLayout = () => {
  const { name } = useParams();
  const [user, setUser] = useState(null);
  const lastParam = useLocation().pathname.split('/').pop();
  useEffect(() => {
    const fetchUserData = async (username) => {
      const q = query(
        collection(getFirestore(), 'users'),
        where('name', '==', username)
      );
      const querySnapshot = await getDocs(q);
      let data;
      querySnapshot.forEach((doc) => {
        data = doc.data();
      });
      return data;
    };
    fetchUserData(name).then((data) => {
      setUser(data);
    });
  }, [name]);
  return (
    <>
      {user && (
        <>
          <div className="profile-header">
            <div className="profile-container">
              <img src={user.profilePic} alt={`${user.name} profile`} />
              <div className="profile-name">{user.name}</div>
            </div>
            <nav className="profile-tabs">
              <ul>
                <li>
                  <Link
                    id="postsLink"
                    className={
                      lastParam === 'posts' || lastParam === '' ? 'active' : ''
                    }
                    to={`/user/${user.name}/posts`}
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    id="commentsLink"
                    className={lastParam === 'comments' ? 'active' : ''}
                    to={`/user/${user.name}/comments`}
                  >
                    Comments
                  </Link>
                </li>
                <li>
                  <Link
                    id="favouritesLink"
                    className={lastParam === 'favourites' ? 'active' : ''}
                    to={`/user/${user.name}/favourites`}
                  >
                    Favourites
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Outlet context={name} />
        </>
      )}
    </>
  );
};

export default UserLayout;
