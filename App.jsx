import React from 'react';
import CharacterCards from './components/CharacterCards.jsx';
import characters from './fma-data.ts';

const App = () => (
  <div>
    <h1>Fullmetal Alchemist Characters</h1>
    <CharacterCards characters={characters} />
  </div>
);

export default App;