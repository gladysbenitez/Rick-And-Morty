import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import EpisodeList from './EpisodeList';

const mockEpisodes = [
  { id: '1', name: 'Episode 1', air_date: '2021-01-01', episode: 'S01E01' },
  { id: '2', name: 'Episode 2', air_date: '2021-01-02', episode: 'S01E02' },
];

const mockSelectEpisode = jest.fn();

describe('EpisodeList', () => {
  it('renders a list of episodes', () => {
    render(<EpisodeList episodes={mockEpisodes} onSelectEpisode={mockSelectEpisode} selectedEpisodeId={null} />);
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode 2')).toBeInTheDocument();
  });

  it('displays a message when no episodes are available', () => {
    render(<EpisodeList episodes={[]} onSelectEpisode={mockSelectEpisode} selectedEpisodeId={null} />);
    expect(screen.getByText('No episodes available')).toBeInTheDocument();
  });
});