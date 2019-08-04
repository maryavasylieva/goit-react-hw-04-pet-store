import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Pages.module.css";

const Navigation = () => (
  <ul className={styles.nav}>
    <li>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/pets"
        className={styles.link}
        activeClassName={styles.active}
      >
        Pets
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={styles.link}
        activeClassName={styles.active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Navigation;

// const Nav = () => (
//    <ul className={css.nav}>
//      <li>
//        <NavLink to="/" exact className={css.link} activeClassName={css.active}>
//          Home
//        </NavLink>
//      </li>
//      <li>
//        <NavLink to="/pets" className={css.link} activeClassName={css.active}>
//          Pets
//        </NavLink>
//      </li>
//      <li>
//        <NavLink to="/about" className={css.link} activeClassName={css.active}>
//          About
//        </NavLink>
//      </li>
//    </ul>
//  );
