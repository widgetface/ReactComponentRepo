import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the correct messag', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('To see the components close the browser and run "npm run storybook"');
  expect(linkElement).toBeInTheDocument();
});
