import React from "react";
import { favData } from "../data/fma-data";
import styles from "./FavoritesTable.module.css";

export const FavoritesTable = () => (
  <>
    <h4 className={styles.charTableH4}>Top Characters</h4>
    <table className={styles.charTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        {favData.map((favCharacter, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? styles.dark : styles.light}
          >
            <td>{favCharacter.name}{favCharacter.nickName ? `, "${favCharacter.nickName}"` : ""}</td>
            <td>{favCharacter.skillSet}</td>
            <td>{favCharacter.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
