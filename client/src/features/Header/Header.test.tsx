import { render, screen } from '../../test/test-utils';
import Header from '.';

test('renders correctly', () => {
  render(<Header />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
});
