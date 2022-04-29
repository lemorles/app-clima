import React, { useState } from "react";
import { Route } from "react-router-dom";
import Nav from "../components/Nav";
import Cards from "../components/Cards";
import About from "../components/About";
import City from "../components/City";
import img from "../img/logoHenry.png";

export default function App() {
  const [cities, setCities] = useState([]);
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const onSearch = (ciudad) => {
    let found = cities?.find((city) => city.name.toLowerCase() === ciudad);
    if (found) return;

    fetch(`${URL}?q=${ciudad}&appid=${API_KEY}&units=metric`)
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };

  const onClose = (id) => {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  };

  const onFilter = (cityId) => {
    let city = cities.filter((c) => c.id === parseInt(cityId));

    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <Route
        path="/"
        render={({ location }) => (
          <Nav
            title="WeatherApp"
            src={img}
            onSearch={onSearch}
            location={location}
          />
        )}
      />

      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />

      <Route exact path="/about" component={About} />

      <Route
        exact
        path="/city/:cityId"
        render={({ match }) => (
          <City city={onFilter(match.params.cityId)} match={match} />
        )}
      />
    </div>
  );
}
