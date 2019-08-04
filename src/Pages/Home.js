import React from "react";
import styles from "../Pages.module.css";

const logoImg = require("../assets/fluffy-paws-master-logo28.png");

const Home = () => (
  <div className={styles.logoImg}>
    <h1>Welcome to our online pet store "Fluffy's Paws"</h1>
    <img src={logoImg} alt="logo" className={styles.logo} />
  </div>
);

export default Home;
