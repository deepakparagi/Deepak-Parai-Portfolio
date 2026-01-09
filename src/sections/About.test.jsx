import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About Section', () => {
    it('renders the correct bio', () => {
        render(<About />);
        expect(screen.getByText(/Final-Year B.E. Student/i)).toBeInTheDocument();
        expect(screen.getByText(/AI & Machine Learning/i)).toBeInTheDocument();
    });

    it('renders correct education details', () => {
        render(<About />);
        expect(screen.getByText(/NMIT, Bengaluru/i)).toBeInTheDocument();
        expect(screen.getByText(/Government Polytechnic, Gadag/i)).toBeInTheDocument();
    });

    it('renders correct internship experience', () => {
        render(<About />);
        expect(screen.getByText(/GTTC, Hubli/i)).toBeInTheDocument();
        expect(screen.getByText(/Music Streaming App/i)).toBeInTheDocument();
        expect(screen.getByText(/Postman testing/i)).toBeInTheDocument();
    });

    it('does not render certifications', () => {
        render(<About />);
        expect(screen.queryByText(/Great Learning/i)).not.toBeInTheDocument();
    });
});
