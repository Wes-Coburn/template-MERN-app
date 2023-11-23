import { useParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

export default function NewNote() {
  const { userId } = useParams();
  return (
    <Fade>
      <p>{userId}&apos;s New Note</p>
    </Fade>
  );
}
