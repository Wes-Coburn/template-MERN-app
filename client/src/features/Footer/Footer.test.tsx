import { render, screen } from '../../test/test-utils';
import Footer from '.';

test('renders correctly', () => {
  render(<Footer />);
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
