import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
  });
});
