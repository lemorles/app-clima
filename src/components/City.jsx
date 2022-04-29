import React from "react";
import styles from "./City.module.css";

export default function City({ city }) {
  return (
    <div className={styles.container}>
      {city ? (
        <>
          <h2>{city.name}</h2>
          <div>
            <p>Temperatura: {city.temp} ºC</p>
            <p>Clima: {city.weather}</p>
            <p>Viento: {city.wind} km/h</p>
            <p>Cantidad de nubes: {city.clouds}</p>
            <p>Latitud: {city.latitud}º</p>
            <p>Longitud: {city.longitud}º</p>
          </div>
        </>
      ) : (
        <p>La ciudad no se encuentra en la lista</p>
      )}
    </div>
  );
}
