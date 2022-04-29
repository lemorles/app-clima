import React from "react";
import Card from "./Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={styles.cards}>
      {!cities.length ? (
        <p className={styles.err}>No hay ciudades.. Agrega una!</p>
      ) : (
        cities.map((city) => (
          <Card
            key={city.id}
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}
