import { useParams, Outlet } from 'react-router-dom';

const UserLayout = () => {
  const { userName } = useParams();

  return (
    <>
      Hello {userName}! Welcome to user page
      <Outlet />
    </>
  );
};

export default UserLayout;
