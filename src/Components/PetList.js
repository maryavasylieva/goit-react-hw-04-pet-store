import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import styles from "../Pages.module.css";

const PetList = ({ pets = [], match }) => (
  <ul className={styles.petsList}>
    {pets.map((pet) => (
      <li key={pet.id} className={styles.petsItem}>
        <Link to={`${match.path}/${pet.id}`} className={styles.petLink}>
          <img src={pet.image} alt="pet" className={styles.petImage} />
          <h2 className={styles.petName}>{pet.name}</h2>
        </Link>
      </li>
    ))}
  </ul>
);

PetList.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  match: ReactRouterPropTypes.match.isRequired
};

export default withRouter(PetList);
