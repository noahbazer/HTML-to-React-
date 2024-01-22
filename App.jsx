import React from 'react';
import CharacterCards from './components/CharacterCards.jsx';
import characters from './data/fma-data.ts';
import FavoritesContainer from './components/FavoritesContainer.jsx';
import Header from './components/Header.jsx';
import './App.css';

const App = () => (
  <>
    <Header />
    <FavoritesContainer />
    <CharacterCards characters={characters} />
  </>
);

export default App;