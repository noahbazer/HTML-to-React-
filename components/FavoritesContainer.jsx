import React from "react";
import styles from "./FavoritesContainer.module.css";
import Table from "./Table";

class FavoritesContainer extends React.Component {
  render() {
    return (
      <div className={styles.characterRatings}>
        <Table />
      </div>
    );
  }
}

export default FavoritesContainer;
