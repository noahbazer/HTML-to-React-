import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from './CharacterCards.tsx';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <div className={styles.card}>
    <div className={styles.cardTitles}>
      <h3 className={styles.cardTitle}>{character.name}</h3>
      <h4 className={styles.cardSubtitle}>{character.nickName}</h4>
    </div>
    <img className={styles.cardImg} src={character.imageUrl} alt={character.name} />
    <p className={styles.pText}>{character.background}</p>
  </div>
);