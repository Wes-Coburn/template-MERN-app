import Heading from '../Heading';
import { PATHS } from '../../app/routes';

export default function Login() {
  return (
    <>
      <Heading pageURL={PATHS.login()} />
      <p>Login</p>
    </>
  );
}
