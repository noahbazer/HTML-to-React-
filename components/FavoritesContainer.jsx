import React from "react";
import styles from "./FavoritesContainer.module.css";
import FavoriteCharacters from "./FavoriteCharacters";

const FavoritesContainer = () => {
  return (
    <>
      <div className={styles.characterRatings}>
        <FavoriteCharacters />
      </div>
    </>
  );
};

export default FavoritesContainer;
