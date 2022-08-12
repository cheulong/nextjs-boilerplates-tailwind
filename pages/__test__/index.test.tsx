import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('Home', () => {
  it('renders a home page', () => {
    const { container } = render(<Home />);
    const heading = screen.getByText('Hello world!');
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
