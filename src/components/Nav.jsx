import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ title, src, onSearch, location }) {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={styles.link}
        activeClassName={styles.selected}
        exact
      >
        {/* <Link to="/"> */}
        <span className={styles.logo}>
          <img src={src} alt="logo" />
          <h1>{title}</h1>
        </span>
        {/* </Link> */}
      </NavLink>
      <NavLink
        to="/about"
        className={styles.link}
        activeClassName={styles.selected}
        exact
      >
        About
      </NavLink>

      {location.pathname === "/" && <SearchBar onSearch={onSearch} />}
    </nav>
  );
}
