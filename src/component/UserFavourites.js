import { useOutletContext } from 'react-router-dom';

const UserFavourites = () => {
  const username = useOutletContext();
  return <>{username}'s Favourites here!</>;
};

export default UserFavourites;
