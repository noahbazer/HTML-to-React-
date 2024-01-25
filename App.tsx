import React from 'react';
import { CharacterCards } from './components/CharacterCards';

//? Is it just me, or does it feel kinda gross to import this on three separate occasions? Am I hardcoding past a problem here?
//? Also, do you lean towards explicit type declarations or implicit type declarations? I've been trying to use explicit declarations, but I'm not sure if that's the norm.
import { characterData } from './data/fma-data';

import { FavoritesContainer } from './components/FavoritesContainer';
import { Header } from './components/Header';
import './App.css';

    // * Line 18 gave me linter hell because the types of the character object were extensively, horribly broken. Though, admittedly, it's probably good that I had to deal with that, and I definitely wouldn't have caught it if I hadn't been using TypeScript (But oh my god it killed me at first)

export const App = () => (
  <>
    <Header />
    <FavoritesContainer />
    <CharacterCards characterData={characterData} />
  </>
);