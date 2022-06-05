import { useOutletContext } from 'react';

const UserFavourites = () => {
  const username = useOutletContext();
  return <>{username}'s Favourites here!</>;
};

export default UserFavourites;
