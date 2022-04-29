import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ id, max, min, name, img, onClose }) {
  // acá va tu código
  const src = `https://openweathermap.org/img/wn/${img}@2x.png`;

  const handleClick = (e) => {
    e.preventDefault();

    onClose(id);
  };

  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardTitle}>
        <Link to={`/city/${id}`}>{name}</Link>
      </p>
      <div className={styles.cardDescription}>
        <div>
          <p className={styles.max}>
            <span>&#8593;</span>
            <span>{Math.floor(max)}°</span>
          </p>
          <p className={styles.min}>
            <span>&#8595;</span>
            <span>{Math.floor(min)}°</span>
          </p>
        </div>
        <img src={src} alt="weather" />
      </div>
      <button className={styles.buttonClose} onClick={handleClick}>
        X
      </button>
    </div>
  );
}
