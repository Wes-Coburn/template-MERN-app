import { render, screen, waitFor } from '../test/test-utils';
import { AppContent } from '.';

describe('app component', () => {
  test('should render correctly', () => {
    render(<AppContent isTest />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('should lazy render correctly', async () => {
    render(<AppContent isTest />);
    await waitFor(() => expect(screen.getByRole('main')).toBeInTheDocument());
  });
});
