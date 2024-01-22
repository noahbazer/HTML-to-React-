import React from 'react';
import characters from '../data/fma-data.ts';
import CharacterCard from './CharacterCard';
import styles from './CharacterCards.module.css';

const CharacterCards = () => (
  <div className={styles['character-cards']}>
    {characters.map(character => (
      <CharacterCard key={character.name} character={character} />
    ))}
  </div>
);

export default CharacterCards;
