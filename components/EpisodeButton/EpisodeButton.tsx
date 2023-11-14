import React from 'react';
import styles from '../../styles/EpisodeList.module.css';

interface EpisodeButtonProps {
    episodeId: string;
    isSelected: boolean;
    onSelect: () => void;
    children: React.ReactNode;
}

const EpisodeButton: React.FC<EpisodeButtonProps> = ({ episodeId, isSelected, onSelect, children }) => {
    return (
        <button
            className={`${styles.episode} ${isSelected ? styles.selected : ''}`}
            onClick={onSelect}
            aria-selected={isSelected}
        >
            {children}
        </button>
    );
};

export default EpisodeButton;