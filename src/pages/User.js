import { useParams } from 'react-router-dom';

const User = () => {
  const { userName } = useParams();

  return <>Hello {userName}! Welcome to user page</>;
};

export default User;
