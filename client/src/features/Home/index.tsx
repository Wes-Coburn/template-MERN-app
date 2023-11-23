import { useParams } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  const { userId } = useParams();
  return (
    <Fade>
      <p>{userId}&apos;s Home</p>
    </Fade>
  );
}
