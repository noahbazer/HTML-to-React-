import React from 'react';
import { CharacterCards } from './components/CharacterCards';

//? Is it just me, or does it feel kinda gross to import this on three separate occasions? Am I hardcoding past a problem here?
import { characterData } from './data/fma-data';

import { FavoritesContainer } from './components/FavoritesContainer';
import { Header } from './components/Header';
import './App.css';

export const App = () => (
  <>
    <Header />
    <FavoritesContainer />
    <CharacterCards characterData={characterData} />
  </>
);