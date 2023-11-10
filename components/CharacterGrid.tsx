import React from 'react';
import Image from 'next/image';
import { Character } from '../types';
import styles from '../styles/CharacterGrid.module.css';


type CharacterGridProps = {
  characters: Character[];
};

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters }) => {
  return (
    <div className={styles.charactergrid}>
      {characters.map((character) => (
        <div key={character.id} className={styles.charactercard}>
          <Image src={character.image} alt={character.name} width={100} height={100} />
          <div>{character.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CharacterGrid;