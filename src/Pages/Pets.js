import React from "react";
import PetList from "../Components/PetList";
// import PropTypes from 'prop-types';
import pets from "../assets/pets.json";
import styles from "../Pages.module.css";

const Pets = () => (
  <div className={styles.container}>
    <h2 className={styles.petsHeadline}>Available pets</h2>
    <PetList pets={pets} />
  </div>
);

export default Pets;
