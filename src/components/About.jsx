import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2>Henry WeatherApp</h2>
      <p>
        Esta aplicación web creada con React muestra los datos del clima para
        una o más ciudades consultando la información a la API de
        OpenWeatherMap.
      </p>
    </div>
  );
}
