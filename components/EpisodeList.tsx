import React from 'react';
import { Episode } from '../types';
import styles from '../styles/EpisodeList.module.css';


type EpisodeListProps = {
  episodes: Episode[];
  onSelectEpisode: (episodeId: string) => void;
  selectedEpisodeId: string | null;
};

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  onSelectEpisode,
  selectedEpisodeId,
}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.episodesHeader}>Episodes</div>
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className={`${styles.episode} ${episode.id === selectedEpisodeId ? styles.selected : ''}`}
          onClick={() => onSelectEpisode(episode.id)}
        >
          {episode.name}
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;