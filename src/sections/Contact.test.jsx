import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact Section', () => {
    it('renders the correct email', () => {
        render(<Contact />);
        const emailLink = screen.getByText(/deepakparagi03@gmail.com/i);
        expect(emailLink).toBeInTheDocument();
        expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:deepakparagi03@gmail.com');
    });

    it('renders social links', () => {
        render(<Contact />);
        expect(screen.getByLabelText(/GitHub Profile/i)).toHaveAttribute('href', 'https://github.com/deepakparagi');
        expect(screen.getByLabelText(/LinkedIn Profile/i)).toHaveAttribute('href', 'https://www.linkedin.com/in/deepak-paragi-501140261/');
    });
});
