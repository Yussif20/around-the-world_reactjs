import { useParams } from 'react-router-dom';

export const Country = () => {
  const { country } = useParams();
  return <p>{country}</p>;
};
