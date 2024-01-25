import React from 'react';
import { CharacterCard } from './CharacterCard';
import styles from './CharacterCards.module.css';

//* I wanted to fill you in a bit on the whole React experience thing, since you mentioned that I clearly had experience outside of the curriculum. I do not :). I've been working on this project for about a week, but I spent a week beforehand just working to read the documentation and trying to understanding React and jsx on a very fundamental level (React-Tutorial was huge for that as well). I'm not sure if that's what you meant by past experience, but I wanted to be transparent about it. I'm not sure if I'm doing things the "right" way. I'm also trying to get better at asking questions, so please let me know if you have any feedback on that front. Thanks! :)

//? Is this an acceptable place for this interface? Should it be in in the CharacterCard.tsx file and exported here since it's the most relevant to that card?
//? Alternatively, should it be in a separate file and imported into both CharacterCard.tsx and CharacterCards.tsx?
export interface Character {
    name: string;
    imageUrl: string;
    nickName: string | null;
    background: string;
    skillSet: string;
}

export interface CharacterCardsProps {
    characterData: Character[];
}

export const CharacterCards: React.FC<CharacterCardsProps> = ({ characterData }) => (
    <div className={styles['character-cards']}>
        {characterData.map(character => (
            <CharacterCard key={character.name} character={character} />
        ))}
    </div>
);
