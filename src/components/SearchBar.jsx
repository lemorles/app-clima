import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (!value.length) return alert("Ciudad no encontrada");

    onSearch(value.toLowerCase());
    setValue("");
  };

  // return (
  //   <div className={styles.searchContainer}>
  //     <input
  //       type="text"
  //       placeholder="Ciudad.."
  //       className={styles.search}
  //       value={value}
  //       onChange={handleChange}
  //     />
  //     <button className={styles.button} onClick={handleClick}>
  //       Agregar
  //     </button>
  //   </div>
  // );
  // }

  return (
    <form onSubmit={handleClick} className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Ciudad.."
        className={styles.search}
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Agregar" className={styles.button} />
    </form>
  );
}
