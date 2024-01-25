import React from "react";
import styles from "./FavoritesContainer.module.css";
import { FavoritesTable } from "./FavoritesTable";

export class FavoritesContainer extends React.Component {
  render() {
    return (
      <div className={styles.characterRatings}>
        <FavoritesTable />
      </div>
    );
  }
}
