import { render, screen } from '@testing-library/react';
import App from './App';

test('renders count button', async () => {
  render(<App />);
  const btnCount = await screen.findByRole("button");
  expect(btnCount.innerHTML).toBe('count is 0');
});
