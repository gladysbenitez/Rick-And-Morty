import React from 'react';
import { Episode } from '../types';
import styles from '../styles/EpisodeList.module.css';

interface EpisodeListProps {
  episodes: ReadonlyArray<Episode>;
  onSelectEpisode: (episodeId: string) => void;
  selectedEpisodeId: string | null;
}

const EpisodeList: React.FC<EpisodeListProps> = React.memo(({ episodes, onSelectEpisode, selectedEpisodeId }) => {
  if (!episodes || episodes.length === 0) {
    return <div className={styles.sidebar}>No episodes available</div>;
  }

  return (
    <nav className={styles.sidebar} aria-label="Episode List">
      <h2 className={styles.episodesHeader}>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <button
              className={`${styles.episode} ${episode.id === selectedEpisodeId ? styles.selected : ''}`}
              onClick={() => onSelectEpisode(episode.id)}
              aria-selected={episode.id === selectedEpisodeId}
            >
              {episode.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default EpisodeList;
