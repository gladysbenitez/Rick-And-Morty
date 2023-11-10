"use client"; 
import React, { useState, useEffect } from 'react';
import EpisodeList from '../../components/EpisodeList';
import CharacterGrid from '../../components/CharacterGrid';
import { Episode, Character } from '../../types';
import './globals.css';


const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<string | null>(null);
  const [characterCount, setCharacterCount] = useState<number>(0);


  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/episode');
      const data = await response.json();
      setEpisodes(data.results);
    };
    fetchEpisodes();
  }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (selectedEpisodeId) {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/${selectedEpisodeId}`);
        const { characters: characterUrls } = await response.json();
        setCharacterCount(characterUrls.length); // Set the character count here
        const characterPromises = characterUrls.map((url: string) => fetch(url).then((res) => res.json()));
        const charactersData = await Promise.all(characterPromises);
        setCharacters(charactersData);
      } else {
        setCharacterCount(0); // Reset the character count when no episode is selected
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      }
    };
    fetchCharacters();
  }, [selectedEpisodeId]);

  return (
    <div className="container">
      <EpisodeList
        episodes={episodes}
        onSelectEpisode={setSelectedEpisodeId}
        selectedEpisodeId={selectedEpisodeId}
      />
  <div className="main-content">
  <div className='title'>Rick and Morty Characters</div>
  {selectedEpisodeId && (
    <p className="character-count">{characterCount} characters in episode "{episodes.find(episode => episode.id === selectedEpisodeId)?.name}"</p>
  )}
  <CharacterGrid characters={characters} />
</div>
    </div>
  );
};

export default Home;