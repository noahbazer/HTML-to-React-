import React from "react";
import styles from "./FavoritesContainer.module.css";
import FavoriteCharacters from "./FavoriteCharacters";
import Table from "./Table";

const FavoritesContainer = () => {
  return (
    <>
      <div className={styles.characterRatings}>
        <Table />
      </div>
    </>
  );
};

export default FavoritesContainer;
