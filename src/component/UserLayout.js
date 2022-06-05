import { useParams, Outlet } from 'react-router-dom';
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
          </div>
          <Outlet context={name} />
        </>
      )}
    </>
  );
};

export default UserLayout;
