import { useParams } from 'react-router-dom';

export default function Home() {
  const { userId } = useParams();
  return <p>{userId}&apos;s Home</p>;
}
