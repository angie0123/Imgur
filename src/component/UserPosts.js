import { useOutletContext } from 'react-router-dom';

const UserPosts = () => {
  const username = useOutletContext();
  return <>{username}'s posts here</>;
};

export default UserPosts;
