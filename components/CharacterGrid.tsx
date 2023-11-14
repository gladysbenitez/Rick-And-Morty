import React from 'react';
import Image from 'next/image';
import { Character } from '../types';
import styles from '../styles/CharacterGrid.module.css';

interface CharacterGridProps {
  characters: ReadonlyArray<Character>;
}

const CharacterGrid: React.FC<CharacterGridProps> = React.memo(({ characters }) => {
  if (!characters || characters.length === 0) {
    return <div className={styles.charactergrid}>No characters available</div>;
  }

  return (
    <div className={styles.charactergrid} role="list" aria-label="Character List">
      {characters.map((character) => (
        <div key={character.id} className={styles.charactercard} role="listitem">
          <Image src={character.image} alt={character.name} width={100} height={100} />
          <figcaption>{character.name}</figcaption>
        </div>
      ))}
    </div>
  );
});

export default CharacterGrid;