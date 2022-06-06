import { useParams } from 'react-router-dom';
const EditPost = () => {
  const { id } = useParams();
  return <>Id is {id}</>;
};

export default EditPost;
