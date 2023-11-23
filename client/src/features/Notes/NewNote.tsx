import { useParams } from 'react-router-dom';

export default function NewNote() {
  const { userId } = useParams();
  return <p>{userId}&apos;s New Note</p>;
}
