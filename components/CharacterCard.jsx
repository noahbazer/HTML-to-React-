import React from 'react';

const CharacterCard = ({ character }) => (
  <div className="card">
    <img src={character.imageUrl} alt={character.name} />
    <h2>{character.name}</h2>
    <p>{character.background}</p>
    <ul>
      {character.skillset.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default CharacterCard;