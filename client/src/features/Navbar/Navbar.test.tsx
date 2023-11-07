import { render, screen } from '../../test/test-utils';
import Navbar from '.';

test('renders navbar', () => {
  render(<Navbar />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
