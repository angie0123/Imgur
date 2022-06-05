import { useParams, Outlet } from 'react-router-dom';

const UserLayout = () => {
  const { name } = useParams();

  return (
    <>
      Hello {name}! Welcome to user page
      <Outlet context={name} />
    </>
  );
};

export default UserLayout;
