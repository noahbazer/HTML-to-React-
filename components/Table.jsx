import React from "react";
import { favData } from "../fma-data";
import styles from "./Table.module.css";

const Table = () => (
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
        {favData.map((Favcharacter, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? styles.dark : styles.light}
          >
            <td>{Favcharacter.name}</td>
            <td>{Favcharacter.skillset}</td>
            <td>{Favcharacter.votes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default Table;
