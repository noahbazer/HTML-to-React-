import React from 'react';
import characters from '../fma-data.ts';
import CharacterCard from './CharacterCard';

const CharacterCards = () => (
  <div>
    {characters.map(character => (
      <CharacterCard key={character.name} character={character} />
    ))}
  </div>
);

export default CharacterCards;
