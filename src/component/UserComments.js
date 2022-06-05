import { useOutletContext } from 'react-router-dom';
const UserComments = () => {
  const username = useOutletContext();
  return <>{username}'s Comments here!</>;
};

export default UserComments;
