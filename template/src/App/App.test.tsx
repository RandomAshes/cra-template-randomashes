import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render without axe errors', async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
