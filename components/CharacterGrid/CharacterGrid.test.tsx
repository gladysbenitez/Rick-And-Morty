import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterGrid from './CharacterGrid';
import '@testing-library/jest-dom/extend-expect';


const mockCharacters = [
  { id: '1', name: 'Character 1', image: 'image-url-1' },
  { id: '2', name: 'Character 2', image: 'image-url-2' },
];

describe('CharacterGrid', () => {
  it('renders a grid of characters', () => {
    render(<CharacterGrid characters={mockCharacters} />);
    expect(screen.getByText('Character 1')).toBeInTheDocument();
    expect(screen.getByText('Character 2')).toBeInTheDocument();
    expect(screen.getByAltText('Character 1')).toHaveAttribute('src', 'image-url-1');
    expect(screen.getByAltText('Character 2')).toHaveAttribute('src', 'image-url-2');
  });

  it('displays a message when no characters are available', () => {
    render(<CharacterGrid characters={[]} />);
    expect(screen.getByText('No characters available')).toBeInTheDocument();
  });
});