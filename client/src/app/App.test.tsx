import { render, screen, waitFor } from '../test/test-utils';
import { AppContent } from '.';

describe('app component', () => {
  test('should display loading text before lazy render', async () => {
    render(<AppContent />);
    await waitFor(() => expect(screen.getByRole('main')).toBeInTheDocument());
  });

  test.skip('should lazy render correctly', async () => {
    render(<AppContent />);
    await waitFor(() => expect(screen.getByRole('main')).toBeInTheDocument());
  });
});
