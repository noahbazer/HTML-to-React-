import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterCard.module.css';

const CharacterCard = ({ character }) => (
  <div className={styles.card}>
    <div className={styles.cardTitles}>
      <h3 className={styles.cardTitle}>{character.name}</h3>
      <h4 className={styles.cardSubtitle}>{character.nickName}</h4>
    </div>
    <img className={styles.cardImg} src={character.imageUrl} alt={character.name} />
    <p className={styles.pText}>{character.background}</p>
  </div>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    skillset: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default CharacterCard;