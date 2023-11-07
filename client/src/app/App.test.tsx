import { render, screen, waitFor } from '../test/test-utils';
import { AppContent } from '.';

describe('app component', () => {
  test('should display loading text before lazy render', async () => {
    render(<AppContent />);
    expect(screen.getAllByText(/loading/i).length).toBe(3);
  });

  test('should lazy render correctly', async () => {
    render(<AppContent />);
    await waitFor(() => expect(screen.getByRole('main')).toBeInTheDocument());
  });
});
